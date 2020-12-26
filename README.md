# Gảqmēkāo

Gảqmēkāo is a temporary experimental dictionary for Toaq, providing tools to view the Tỏadūa data more easily. It is a fork of the [official dictionary](https://github.com/toaq/dictionary) and as such uses the same [format](./format.md).

# Exports

Automatically updated exports are available under the [releases page](https://github.com/robintown/gaqmekao/releases/tag/latest) on GitHub.

You can run `tools/stardict.sh` to generate a StarDict export of the dictionary. It requires Node, as well as the tool 'tabfile' from stardict-tools. The generated file `stardict.tar.xz` may be used in GoldenDict by extracting it in your GoldenDict dictionary directory (typically `~/.local/share/goldendict`). To make searching easier, you may pass the flag `--ascii` to `tools/stardict.sh` to generate an ASCIIfied export instead.

You can additionally view the dictionary as a dynamic [web page](https://robintown.github.io/gaqmekao).
