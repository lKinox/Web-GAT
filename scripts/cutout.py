"""Remove the light studio background from product photos (flood fill from the borders)."""

import sys

import numpy as np
from PIL import Image, ImageFilter


def cutout(
    src: str,
    dst: str,
    crop_bottom: float,
    seeds: list[tuple[float, float]] | None = None,
    size: int = 1024,
) -> None:
    img = Image.open(src).convert("RGB").resize((size, size), Image.LANCZOS)
    arr = np.asarray(img).astype(np.float32) / 255.0

    mx = arr.max(axis=2)
    mn = arr.min(axis=2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    background_like = (mx > 0.72) & (sat < 0.14)

    reached = np.zeros_like(background_like)
    reached[0, :] = background_like[0, :]
    reached[-1, :] = background_like[-1, :]
    reached[:, 0] = background_like[:, 0]
    reached[:, -1] = background_like[:, -1]
    for sx, sy in seeds or []:
        x, y = int(sx * size), int(sy * size)
        reached[y - 2 : y + 3, x - 2 : x + 3] = background_like[y - 2 : y + 3, x - 2 : x + 3]

    while True:
        grown = reached.copy()
        grown[1:, :] |= reached[:-1, :]
        grown[:-1, :] |= reached[1:, :]
        grown[:, 1:] |= reached[:, :-1]
        grown[:, :-1] |= reached[:, 1:]
        grown &= background_like
        if np.array_equal(grown, reached):
            break
        reached = grown

    alpha = Image.fromarray(np.where(reached, 0, 255).astype(np.uint8))
    alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))

    rgba = img.copy()
    rgba.putalpha(alpha)

    cut_y = int(size * crop_bottom)
    rgba = rgba.crop((0, 0, size, cut_y))
    bbox = rgba.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    if bbox:
        rgba = rgba.crop(bbox)
    rgba.save(dst, optimize=True)
    print(dst, rgba.size)


if __name__ == "__main__":
    seed_args = [tuple(map(float, s.split(","))) for s in sys.argv[4:]]
    cutout(sys.argv[1], sys.argv[2], float(sys.argv[3]), seed_args)
