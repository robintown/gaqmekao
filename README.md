# gảqmēkāo

Gaqmekao is an experimental, community-led dictionary for Toaq. It is a fork of the [official dictionary](https://github.com/toaq/dictionary) and as such uses the same [format](./format.md).

# contributing

To understand what dictionary entries should look like, read the [format guidelines](./format.md).

To add a new entry, insert your definition anywhere in `dictionary.json`, making sure to include type, frame, and distributivity data. Then run `tools/normalize.js` and check that no errors occur, and that the diff looks right. When you're ready, commit your changes and submit a pull request. We will merge it once it receives an approval from someone.

While you're at it, please take a moment to review someone else's pull requests. We need your help to ensure data quality!

We also need help cleaning up data imported from Toadua, as it lacks type, frame, and distributivity data, among other irregularities. Feel free to submit pull requests adding this data in bulk.

# exports

Automatically updated exports are available under the [releases page](https://github.com/robintown/gaqmekao/releases/tag/latest) on GitHub.

You can run `tools/stardict.sh` to generate a StarDict export of the dictionary. It requires Node, as well as tabfile from stardict-tools. The generated file `stardict.tar.xz` may be used in GoldenDict by extracting it in your GoldenDict dictionary directory (typically `~/.local/share/goldendict`). To make searching easier, you may pass the flag `--ascii` to `tools/stardict.sh` to generate an ASCIIfied export instead.

You can additionally view the dictionary as a dynamic [web page](https://robintown.github.io/gaqmekao).
