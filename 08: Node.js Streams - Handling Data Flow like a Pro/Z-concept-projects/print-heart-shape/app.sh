#!/usr/bin/env bash
# unicode_heart.sh - prints colored hearts with a small animation

RED='\033[1;31m'   # bright red
RESET='\033[0m'

# A heart pattern using the Unicode black heart (U+2665)
heart=(
"  ♥   ♥  "
" ♥♥♥ ♥♥♥ "
" ♥♥♥♥♥♥♥ "
"  ♥♥♥♥♥  "
"   ♥♥♥   "
"    ♥    "
)

# animate: print with a short delay and clear then reprint (pulse)
for i in {1..6}; do
  # grow/shrink effect: use different left padding
  clear
  printf "%s\n\n" "${RED}"
  for line in "${heart[@]}"; do
    printf "   %s%s%s\n" "$RED" "$line" "$RESET"
  done
  sleep 0.25
#   invert (smaller)
  clear
  sleep 0.08
done

# final full heart (static)
clear
for line in "${heart[@]}"; do
  printf "   %s%s%s\n" "$RED" "$line" "$RESET"
done
echo
