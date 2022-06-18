#!/bin/bash

rm -rf dist
mkdir dist

for source in $(ls src)
do
    cat src/$source | sed 's/export default //g' > dist/$source
done
