# gảqmēkāo

Gaqmekao is an experimental, community-led dictionary for Toaq. It is a fork of the [official dictionary](https://github.com/toaq/dictionary) and as such uses the same [format](./format.md).

# contributing

To understand what dictionary entries should look like, read the [format guidelines](./format.md).

To add a new entry, insert your definition anywhere in `dictionary.json`, making sure to include type, frame, and distributivity data. Then run `tools/normalize.js` and check that no errors occur, and that the diff looks right. When you're ready, commit your changes and submit a pull request. It will be merged automatically once it receives at least two approvals.

We also need help cleaning up data imported from Toadua, as it lacks type, frame, and distributivity data, among other irregularities. Feel free to submit pull requests adding this data in bulk.

# roadmap

This repository should eventually host tools for converting the dictionary data to more convenient formats, such as StarDict.
