#!/bin/bash

set -e

mkdir -p build/gảqmēkāo
pushd build
pushd gảqmēkāo
../../tools/tabfile.js > gảqmēkāo.tab
tabfile gảqmēkāo.tab
rm gảqmēkāo.tab
sed -i 's/stardict/gảqmēkāo/' gảqmēkāo.ifo
popd
tar -cJf stardict.tar.xz gảqmēkāo
popd
cp build/stardict.tar.xz stardict.tar.xz
