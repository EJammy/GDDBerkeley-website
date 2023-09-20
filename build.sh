#!/bin/bash

PATH=$PATH:~/bin

if rclone check gdrive:website-assets assets/gdrive; then
    echo "(¬‿¬) No differences detected."
else
    echo "Found changes, rebuilding website"
    # File are different
    mv gdrive_md5_new.txt gdrive_md5.txt
    rclone sync gdrive:website-assets assets/gdrive
    hugo -d ~/public_html
fi
