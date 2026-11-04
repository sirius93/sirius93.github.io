#!/bin/sh
# Renders banners.html into images/rail/*.webp at 2x. Usage: _banners/build.sh [id ...]
# Needs Google Chrome and ImageMagick, and network for the Google Fonts.
set -e
cd "$(dirname "$0")"
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
tmp=$(mktemp -d)
for id in ${@:-bailoutt kitaaben wobuddy dock cope cloud}; do
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=160,600 --virtual-time-budget=5000 --user-data-dir="$tmp/profile" \
    --screenshot="$tmp/$id.png" "file://$PWD/banners.html#$id" >/dev/null 2>&1
  magick "$tmp/$id.png" -crop 320x1200+0+0 +repage -quality 86 "../images/rail/$id.webp"
  echo "images/rail/$id.webp"
done
rm -rf "$tmp"
