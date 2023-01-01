#!/bin/sh
# install Deno
# echo 'Installing Deno'
# curl -fsSL https://deno.land/install.sh | sh

# add to path
# echo 'Adding Deno to path'
export DENO_INSTALL="/home/codespace/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"