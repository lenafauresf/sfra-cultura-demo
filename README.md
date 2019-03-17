# Cultura Demo - Storefront Reference Architecture (SFRA)

This is a repository for the Cultura Demo Front cartridge for Storefront Reference Architecture.


# Getting Started

1. Clone this repository.
2. Install npm dependencies `npm install`
3. Open package.json file and modify `paths.base` property to point to the local directory containing the Storefront Reference Architecture project
4. Run `npm run compile:js && npm run compile:scss` to create client-side assets
5. Upload the `cartridges` folder to the WebDav location for cartridges for your Sandbox through CyberDuck or any other WebDAV client.

# NPM scripts
Use the provided NPM scripts to compile and upload changes to your Sandbox.

## Compiling your application

* `npm run compile:scss` - Compiles all scss files into css.
* `npm run compile:js` - Compiles all js files and aggregates them.

