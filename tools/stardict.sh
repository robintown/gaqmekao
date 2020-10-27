#!/bin/bash

set -e

has_param() {
    local term="$1"
    shift
    for arg; do
        if [[ $arg == "$term" ]]; then
            return 0
        fi
    done
    return 1
}

cd $(dirname $0)/..

mkdir -p build/gảqmēkāo
pushd build
pushd gảqmēkāo
if has_param "--ascii" "$@"; then
    ../../tools/tabfile.js --ascii > gảqmēkāo.tab
else
    ../../tools/tabfile.js > gảqmēkāo.tab
fi
tabfile gảqmēkāo.tab
rm gảqmēkāo.tab
sed -i 's/stardict/gảqmēkāo/' gảqmēkāo.ifo
popd
tar -cJf stardict.tar.xz gảqmēkāo
popd
if has_param "--ascii" "$@"; then
    cp build/stardict.tar.xz stardict-ascii.tar.xz
else
    cp build/stardict.tar.xz stardict.tar.xz
fi
