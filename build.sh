#!/bin/bash

PATH=$PATH:~/bin

if rclone check gdrive:website-assets assets/gdrive; then
    echo "(¬‿¬) No differences detected."
else
    # File are different
    echo "Found changes, rebuilding website"
    rclone sync gdrive:website-assets assets/gdrive
    hugo -d ~/public_html
fi
