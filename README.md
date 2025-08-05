# WebTV Redialed / ParaTV
This is a replacement service for WebTV/MSN TV (1st generation) clients, originally based on zefie's [minisrv](https://github.com/zefie/zefie_wtvp_minisrv) project. **This software is provided AS IS, with NO WARRANTY.**

This branch (`paratv`) has my own changes, mostly done for myself to assist with messing around with the WebTV hardware and service. No help will be provided in trying to get this fork to run, nor the original Redialed codebase.

## Acknowledgements
- [SKCro](https://github.com/SKCro/) for creating the transgender WebTV jewel for this fork
- [Nova](https://github.com/amrd24) for creating the Garfield comic reader
  
## Changes from main
- Transgender-themed WebTV jewel on the home page, made by SKCro
- Add in a list of client commands at `wtv-tricks:/client`, diskmap commands at `wtv-tricks:/client-plus`, and pages for error explanations at `wtv-tricks:/client-explanation` (unfinished)
- Link to `wtv-tricks:/switcher` on the home page
- Splash screen has no Plus text, even when on Plus hardware
- Add in error handling for when there's no weather data, for example when you have no API key (currently very buggy/unfinished, but will prevent server-side errors)
- Rudimentary implementation of grabbing stock data (currently only shows in WebTV Today, and can only show one hard-coded stock)
- Garfield comic strip viewer accessible at `wtv-center:/garfield`

## Setup + running the service
- Run `npm install` to install all dependencies.
- Configure the service to your preferences (see the below section)
- Run the service: `npm start`. If you get an error with the code `ERR_OSSL_EVP_UNSUPPORTED`, try `npm run startossl` instead.

## Notes for service configuration 
`includes/config.json` is the default configuration file that applies to *all* instances. `user_config.json` should contain configuration options specific to your instance and environment. If you wish to change the server's configuration from the defaults, please put your configuration changes in `user_config.json`. The file should be created in the root directory of this repository, and will be ignored by Git. We do this as to not have environment-specific and potentially sensitive configuration options (API keys, Tricks passwords, etc) exposed in a public repo.

Please make sure of the following:
- Service IP is correct and the service can be accessed from it
- Guest users are *not* enabled
- Registration is open on public services
- Appropriate API keys are functional for things like time zone determination, and sensitive passwords such as the Tricks password should not be left as their defaults
