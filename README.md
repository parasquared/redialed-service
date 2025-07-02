# WebTV Redialed / ParaTV
This is a replacement service for WebTV/MSN TV (1st generation) clients, originally based on zefie's [minisrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

This branch (`paratv`) has my own changes, mostly done for myself to assist with messing around with the WebTV hardware and service. No help will be provided in trying to get this branch to run, nor the original Redialed codebase.

## Acknowledgements
- [SKCro](https://github.com/SKCro/) for creating the transgender WebTV jewel for this fork
  
## Changes from main
- A new transgender-colored WebTV jewel on the home page thanks to SKCro
- Adds `wtv-client:/client`, which includes a linked list of every client command I've tested, as well as what it does for the more dangerous commands (as well as some Plus diskmap-related stuff in `wtv-client:/plus`)
- Link to `wtv-tricks:/switcher` on the home page
- Splash screen has no Plus text, even when on Plus hardware
- Added in error handling for when there's no weather data, for example when you have no API key (currently very buggy/unfinished, but will prevent server-side errors)
- Rudimentary implementation of grabbing stock data (currently only shows in WebTV Today, and can only show one hard-coded stock)

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your liking. (see the below section)
- Try running `npm run start17` or the start scripts.

## Notes for service configuration 
`includes/config.json` is the default configuration file that applies to *all* instances. `user_config.json` should contain configuration options specific to your instance and enviornment. If you wish to change the server's configuration from the defualts, please put your configuration changes in `user_config.json`. The file should be created in the root directory of this repository, and will be ignored by Git. We do this, as to not have enviornment-specific, and potentially sensitive configuration options (API keys, Tricks passwords, etc) exposed in a public repo.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination
