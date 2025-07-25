# @web3icons/react

## 4.0.19

### Patch Changes

- fix missed build

## 4.0.18

### Patch Changes

- fix memecoin token icon
- Updated dependencies
  - @web3icons/common@0.11.15

## 4.0.17

### Patch Changes

- use unichain mainnet chainid instead of testnet
- Updated dependencies
  - @web3icons/common@0.11.14

## 4.0.16

### Patch Changes

- add status network
- Updated dependencies
  - @web3icons/common@0.11.13

## 4.0.15

### Patch Changes

- add ozean network
- Updated dependencies
  - @web3icons/common@0.11.12

## 4.0.14

### Patch Changes

- add Katana network
- Updated dependencies
  - @web3icons/common@0.11.11

## 4.0.13

### Patch Changes

- add ultra network (mono,branded,background)
- Updated dependencies
  - @web3icons/common@0.11.10

## 4.0.12

### Patch Changes

- Created separate dynamic entry point for components using hooks to prevent 'use client' directive and hooks from leaking into main bundle which ensures server-side compatibility for static exports

## 4.0.11

### Patch Changes

- add mega-eth network icon
  update metamask wallet icon
  update berachain network icon
- Updated dependencies
  - @web3icons/common@0.11.9

## 4.0.10

### Patch Changes

- add peaq network
  add PEAQ token
- Updated dependencies
  - @web3icons/common@0.11.8

## 4.0.8

### Patch Changes

- add hashkey network (branded, mono, background)
  add ARI token (branded, mono, background)
  fix iotex branded icon
- Updated dependencies
  - @web3icons/common@0.11.7

## 4.0.7

### Patch Changes

- add networks: swell, autonomys - add token: SWELL
- Updated dependencies
  - @web3icons/common@0.11.6

## 4.0.6

### Patch Changes

- new networks:

  ontology (branded, mono, background)
  prom (branded, mono, background)
  ink (branded, mono, background)

  updated tokens:
  PROM (branded, mono, background)

- Updated dependencies
  - @web3icons/common@0.11.5

## 4.0.5

### Patch Changes

- add nexis network, apechain update APE token
- Updated dependencies
  - @web3icons/common@0.11.4

## 4.0.4

### Patch Changes

- quick patch for react
- Updated dependencies
  - @web3icons/common@0.11.3

## 4.0.3

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.2

## 4.0.2

### Patch Changes

- new networks:
  Vana (background, branded, mono)
  Vara (background, branded, mono)
  Japan Open Chain (background, branded, mono)
  EXP Chain (background, branded, mono)

  new tokens:
  PNB (background, branded, mono)
  JOP (background, branded, mono)
  VARA (background, branded, mono)
  VANA (background, branded, mono)
  HUSH (background, branded, mono)
  ZRX (background, branded, mono)

  new variants:
  NEST (background, branded)

  fixed: TELOS

- Updated dependencies
  - @web3icons/common@0.11.1

## 4.0.1

### Patch Changes

- slightly reduce icon sizes for better consistency

## 4.0.0

### Major Changes

- - new `background` variant for icons.
  - add `branded` variant to most of the missing icons.
  - include `fileName` to the metadata
  - support `caip2id` for network icons.
  - performance improvements for dynamic icons (`TokenIcon`, `NetworkIcon`, `ExchangeIcon`, `WalletIcon`) (this should fix #25 and #40)
  - website improvements

  **cli:**

  - migrate from `@inquirer` to `@clack`
  - greatly improve `add-icons` flow's UX
  - cover icon deletion (fixes #33)

  **ID changes**
  renamed several network icons to align with official naming

  - `polygon` (was `polygon-pos`)
  - `multiversx` (was `elrond`)
  - `viction` (was `tomochain`)
  - `kaia` (was `klay-token`)
  - `okex` (was `okex-chain`)
  - `optimism` (was `optimistic-ethereum`)
  - `trust` (was `trust-wallet`)

  **new networks:**
  `multiversx`, `moonbase-alpha`, `nibiru`, `push`, `berachain`, `paradex`, `zero-network`, `zircuit`
  _(all available in background, branded, and mono variants.)_

  **new network variants:**
  `zora`, `xrp`, `algorand` _(background, branded)_

  **new exchanges:**
  `aevo`, `paradex` _(branded, mono, background)_

  new token variants:
  `AAG`, `ACRIA`, `AIOZ`, `ABL`, `ALGO`, `ABR`, `ARB`, `AURABAL`, `AVINOC`, `BNT`, `BBL`, `BTCST`, `GBYTE`, `CLXY`, `CSPR`, `CELR`, `CAPS`, `CTC`, `XCUR`, `DENT`, `DERC`, `DEXE`, `DIMO`, `DVI`, `ECO`, `EOS`, `EOSDT`, `ERG`, `ERTHA`, `EUROE`, `FLAME`, `FRAX`, `FXS`, `FRIN`, `FRONT`, `GCOIN`, `HFT`, `XHV`, `HBAR`, `SEILOR`, `KSM`, `LEOX`, `LGCY`, `PRISM`, `GAL`, `QUAD`, `QTCON`, `BTRFLY`, `RSR`, `XRP`, `QUARTZ`, `SCRT`, `SENATE`, `SKL`, `SLCL`, `SOLO`, `SPC`, `SFRXETH`, `SMT`, `SNS`, `EURT`, `THE`, `THEO`, `WWY`, `WING`, `WOZX`, `WBTC`, `WCFG`, `ZTG`, `ZKID`
  _(background, branded)_

  deprecated tokens:
  `BAKE`, `ALPHA`, `AST`, `ADP`, `ADX`, `ADS`, `AGLD`, `ADCO`, `AEGIS`, `AERGO`, `AERO`, `AE`, `AGI`, `AMKT`, `ASCN`, `ASTO`, `ALU`, `AMB`, `AMO`, `AMPL`, `AMP`, `ANC`, `ANGLE`, `ANKR`, `ANKRETH`, `BANANA`, `ADOGE`, `ARBI`, `ARV`, `AFC`, `ASD`, `ASIA`, `ASM`, `ASSA`, `ASTR`, `ASTRADAO`, `ASTRAFER`, `ASTROC`, `BXX`, `BABYDOGE`, `BABYSHIB`, `BABYTRUMP`, `BADGER`, `BAD`, `BAI`, `BAL`, `BAND`, `BAO`, `BFT`, `BWO`, `BIFI`, `BETS`, `BFIC`, `BHAT`, `BICO`, `BIDZ`, `BIGSB`, `BUSD`, `BISO`, `B2M`, `BGB`, `BPRO`, `BTSG`, `BTT`, `BPT`, `BONDLY`, `BONK`, `BORA`, `BORING`, `BOSON`, `BOOT`, `BOTTO`, `BOX`, `BREED`, `BTU`, `BUILD`, `BULL`, `BUMP`, `BUY`, `BURGER`, `ETHEREUM`, `BFR`, `AMZ`, `BASE`, `ORDER`, `BAN`, `S`

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.11.0

## 3.16.0

### Minor Changes

- new network icons:

  - mint (branded, mono)
  - monad (branded, mono)
  - silicon (branded, mono)
  - treasure (branded, mono)

  fix arbitrum-one branded icon

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.10.0

## 3.15.0

### Minor Changes

- - Support Exchanges
  - Crate ExchangeIcon (dynamic icon component)
  - New Icons:
    - Bybit (mono, branded)
    - Kucoin (mono, branded)
    - Coinbase (mono, branded)
    - 1Inch (mono, branded)
    - Balancer (mono, branded)
    - Bancor (mono, branded)
    - Binance (mono, branded)
    - Bithumb (mono, branded)
    - BitStamp (mono, branded)
    - BTC Turk (mono, branded)
    - Crypto-com (mono, branded)
    - Gate-io (mono, branded)
    - Gemini (mono, branded)
    - Kraken (mono, branded)
    - Odos (mono, branded)
    - OkX (mono, branded)
    - Pancake Swap (mono, branded)
    - ParaSwap (mono, branded)
    - Paribu (mono, branded)
    - Suhsi Swap (mono, branded)
    - SwissBorg (mono, branded)
    - Uniswap (mono, branded)
    - UpBit (mono, branded)
    - Cow Swap (mono, branded)
  - fix: build racing conditions for react

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.9.0

## 3.14.0

### Minor Changes

- new networks:

  - hemi
  - lumia
  - wax
  - sonic
  - super-seed
  - rei

  new token

  - S (sonic)

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.8.0

## 3.13.2

### Patch Changes

- fix networks index
- Updated dependencies
  - @web3icons/common@0.7.2

## 3.13.1

### Patch Changes

- add mantra chain
- Updated dependencies
  - @web3icons/common@0.7.1

## 3.13.0

### Minor Changes

- new tokens: BAN, BANANO
  new networks: corn, botanix

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.7.0

## 3.12.1

### Patch Changes

- fix false build
- Updated dependencies
  - @web3icons/common@0.6.1

## 3.12.0

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.6.0

## 3.11.0

### Minor Changes

- new networks: taiko, moonbase-alpha, lumio

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.5.0

## 3.10.1

### Patch Changes

- fix unichain
- Updated dependencies
  - @web3icons/common@0.4.1

## 3.10.0

### Minor Changes

- new networks:

  - unichain
  - optopia
  - orderly
  - arweave
  - moonbeam
  - fluence
  - harmony

  new tokens:

  - ORDER

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.4.0

## 3.9.0

### Patch Changes

- Updated dependencies
  - @web3icons/common@0.3.0

## 3.8.0

### Minor Changes

- 03c8c28: new networks: bob, soneium, kaia, kakarot, karura

### Patch Changes

- Updated dependencies [03c8c28]
  - @web3icons/common@0.2.0

## 3.7.1

### Patch Changes

- patch
- Updated dependencies
  - @web3icons/common@0.1.1

## 3.7.0

### Minor Changes

- create common package, this makes the react package leaner
- drop cjs support
- fix beam network shortname
- fix base token image
- add JSDoc to icon components

### Patch Changes

- Updated dependencies [bd3742e]
- Updated dependencies
  - @web3icons/common@0.1.0

## 3.6.2

### Patch Changes

- fix shortName for Beam network
- Updated dependencies
  - @web3icons/core@3.6.2

## 3.6.1

### Patch Changes

- host optimized svgs in the core package and move raw svgs out
- Updated dependencies
  - @web3icons/core@3.6.1

## 3.6.0

### Minor Changes

- New Icons
  13 new networks:
  dogechain
  hubblenet
  milkomeda-a1
  milkomeda-c1
  reya
  tenet
  rollux
  bouncebit
  mantle
  nahmii
  tombchain
  bouncebit
  reya

  Fixes & Improvements
  remove @web3icons/utils as a dependency
  reduce the dependencies of packages
  fix a typo on networks.json

### Patch Changes

- Updated dependencies
  - @web3icons/core@3.6.0

## 3.5.2

### Patch Changes

- hotfix type

## 3.5.1

### Patch Changes

- patch NetworkIcon type

## 3.5.0

### Minor Changes

- - support chainId in `NetworkIcon`
  - add 33 new network icons:
    - `coinex-smart-chain`
    - `conflux`
    - `cronos-zkevm`
    - `elastos`
    - `energy-web`
    - `enuls`
    - `ethereum-classic`
    - `flare`
    - `fraxtal`
    - `fuse`
    - `kardia`
    - `lyra`
    - `meter`
    - `oasys`
    - `okex-chain`
    - `rollux`
    - `rootstock`
    - `shiden`
    - `step`
    - `shimmer-evm`
    - `songbird`
    - `sys`
    - `theta`
    - `thundercore`
    - `ubiq`
    - `ultron`
    - `velas`
    - `tomochain`
    - `xdc`
    - `zyx`
    - `kuchain`
  - retire @web3icons/typescript-config

### Patch Changes

- Updated dependencies
  - @web3icons/core@3.5.0
  - @web3icons/utils@0.2.1

## 3.4.0

### Minor Changes

- introduce "fallback" to WalletIcon, TokenIcon and NetworkIcon. fallback prop takes in a string or ReactNode and renders that if the provided props can't find a match. e.g.: `<TokenIcon symbol="EETH" fallback="/logo.svg">` would render the `logo.svg` because `eeth` is invalid.

### Patch Changes

- Updated dependencies
  - @web3icons/utils@0.2.0
  - @web3icons/core@3.4.0

## 3.3.1

### Patch Changes

- svg.d.ts
- Updated dependencies
  - @web3icons/utils@0.1.1
  - @web3icons/core@3.3.1

## 3.3.0

### Minor Changes

- interopability issues
- fix interoperability issues

### Patch Changes

-
- patch core exports
- interopability
- fix metadata export from core
- patch
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @web3icons/utils@0.1.0
  - @web3icons/core@3.3.0

## 3.3.0-alpha.5

### Patch Changes

- interopability
- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.5
  - @web3icons/core@3.3.0-alpha.5

## 3.3.0-alpha.4

### Patch Changes

-
- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.4
  - @web3icons/core@3.3.0-alpha.4

## 3.3.0-alpha.3

### Patch Changes

- patch core exports
- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.3
  - @web3icons/core@3.3.0-alpha.3

## 3.3.0-alpha.2

### Patch Changes

- fix metadata export from core
- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.2
  - @web3icons/core@3.3.0-alpha.2

## 3.3.0-alpha.1

### Patch Changes

- patch
- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.1
  - @web3icons/core@3.3.0-alpha.1

## 3.3.0-alpha.0

### Minor Changes

- interopability issues

### Patch Changes

- Updated dependencies
  - @web3icons/utils@0.1.0-alpha.0
  - @web3icons/core@3.3.0-alpha.0

## 0.0.0-alpha-20240813101020

### Patch Changes

- rollup on core
- Updated dependencies
  - @web3icons/utils@0.0.0-alpha-20240813101020
  - @web3icons/core@0.0.0-alpha-20240813101020

## 3.2.1

### Patch Changes

- fix build-script
- Updated dependencies
  - @web3icons/core@3.2.1
  - @web3icons/utils@0.0.12

## 3.2.0

### Minor Changes

- add wallet icon support (WalletIcon)
  `metamask`, `alfa1`, `argent`, `backpack`, `coin98`, `coinbase`, `enkrypt`, `imtoken`, `kraken`, `lit`, `obvious`, `okx`, `phantom`, `portal`, `rabby`, `rainbow`, `safe`, `ledger`, `soul`, `token-pocket`, `trezor`, `unipass`, `venly`, `wallet-connect`, `zengo`, `zerion`, `multis`, `alpha-wallet` `my-ether-wallet`, `pillar`, `ronin`, `sender`, `sequence`, `squads`, `trust`, `wallet-3`, `xdefi`
- improving icon matching

### Patch Changes

- Updated dependencies
  - @web3icons/core@3.2.0
  - @web3icons/utils@0.0.11

## 3.1.0

### Minor Changes

- `variant` prop is now optional and defaults to `mono` when icon has supports both variants.

## 3.0.1

### Patch Changes

-
- Updated dependencies
  - @web3icons/core@3.0.1
  - @web3icons/utils@0.0.10

## 3.0.0

### Major Changes

- rename to @web3icons

### Patch Changes

- Updated dependencies
  - @web3icons/core@3.0.0
  - @web3icons/utils@0.0.9

## 2.14.0

### Minor Changes

- new networks: `abstract` `acala` `apex-layer` `arbitrum-nova` `bitkub-chain`

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.14.0
  - @web3icons/utils@0.0.8

## 2.13.0

### Minor Changes

- add new network icons: `lava-network`, `neo-x`

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.13.0
  - @web3icons/utils@0.0.7

## 2.12.1

### Patch Changes

- fix some fields not being added to the metadata correctly
- Updated dependencies
  - @web3icons/core@2.12.1
  - @web3icons/utils@0.0.6

## 2.12.0

### Minor Changes

- utils: greatly improve the add-icons flow with interactive cli.

  update:

  - AAVE new branding

  new:

  - Gravity Network (branded, mono)
  - Iotex Network (branded, mono)
  - Clover Network (branded, mono)
  - G Token (branded, mono)

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.12.0
  - @web3icons/utils@0.0.5

## 2.11.0

### Minor Changes

- improve svg path dimensions

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.11.0

## 2.10.0

### Minor Changes

- add networks: fio, stargaze

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.10.0
  - @web3icons/utils@0.0.4

## 2.9.1

### Patch Changes

- Updated dependencies
  - @web3icons/utils@0.0.3
  - @web3icons/core@2.9.1

## 2.9.0

### Minor Changes

- new network icons:
  `cosmos-hub`, `metis-andromeda`, `moonriver`, `sei-network`, `cosmos-hub`, `litecoin`, `wemix`, `near-protocol`, `hedera`, `rari`, `bitcoin`,`zetachain` `xrp(mono)`
- fix icon sizes: `aptos`, `arbitrum`, `avalanche`, `base`, `binance-smart-chain`, `cardano`, `cosmos-hub`, `ethereum`, `optimism`, `solana`, `tron`

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.9.0

## 2.8.2

### Patch Changes

- fix: include name or id matching for NetworkIcon
- Updated dependencies
  - @web3icons/core@2.8.2

## 2.8.1

### Patch Changes

- fix AMZ variants
- Updated dependencies
  - @web3icons/core@2.8.1

## 2.8.0

### Minor Changes

- improvements

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.8.0

## 2.7.1

### Patch Changes

- new tokens: SENSE, AMZ, USN
- Updated dependencies
  - @web3icons/core@2.7.1

## 2.7.0

### Minor Changes

- add network icons: Zora, XAI

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.7.0

## 2.6.1

### Patch Changes

- patch
- Updated dependencies
  - @web3icons/core@2.6.1

## 2.6.0

### Minor Changes

- New Network icons: bitcoin,\n

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.6.0

## 2.5.0

### Minor Changes

- imrpove matching for NetworkIcon

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.5.0

## 2.4.0

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.4.0

## 2.3.2

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.3.2

## 2.3.1

### Patch Changes

-
- Updated dependencies
  - @web3icons/core@2.3.1

## 2.3.0

### Minor Changes

- new network icons: x-layer, etherlink

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.3.0

## 2.2.2

### Patch Changes

- remove console logs for when the icon is not found

## 2.2.1

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.2.1

## 2.2.0

### Minor Changes

- add new icons

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.2.0

## 2.1.0

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.1.0

## 2.0.4

### Patch Changes

- fix TokenIcon icon matching
- Updated dependencies
  - @web3icons/core@2.0.4

## 2.0.3

### Patch Changes

-
- Updated dependencies
  - @web3icons/core@2.0.3

## 2.0.2

### Patch Changes

-
- Updated dependencies
  - @web3icons/core@2.0.2

## 2.0.1

### Patch Changes

-
- Updated dependencies
  - @web3icons/core@2.0.1

## 2.0.0

### Major Changes

- fix move types to core from utils

### Patch Changes

- Updated dependencies
  - @web3icons/core@2.0.0

## 1.9.0

### Minor Changes

- add new networks

### Patch Changes

- Updated dependencies
  - @web3icons/core@1.9.0

## 1.8.1

### Patch Changes

- fix ITokenMetadata types
- Updated dependencies
  - @web3icons/core@1.8.1

## 1.8.0

### Minor Changes

- b337e2e: new network icons: aurora,base,beam,blast,boba,chiliz,cosmos,cosmos-hub,cronos,ethereum,fantom,filecoin,gnosis,hedera,injective,juno,kava,kujira,linea,loopring,manta-pacific,matic,metis,multiversx,near,neon-evm,osmosis,zpolkadot,polygon,polygon-zkevm,ronin,scroll,sei,solana,starknet,sui-1,wemix,zeta,zilliqa,zksync

### Patch Changes

- Updated dependencies [b337e2e]
  - @web3icons/core@1.8.0

## 1.7.0

### Minor Changes

- Added icons: BASE,BNB,COSMOS,BASE,BNB,COSMOS,

### Patch Changes

- Updated dependencies
  - @web3icons/core@1.7.0

## 1.6.0

### Minor Changes

- support network icons

### Patch Changes

- Updated dependencies
  - @web3icons/core@1.6.0

## 1.5.0

### Minor Changes

- fix TokenIcon component missing "color" prop

## 1.4.3

### Patch Changes

- patch build formatting

## 1.4.2

### Patch Changes

- - fix scaffold issue for imports

## 1.4.1

### Patch Changes

- fix BaseIcon import path

## 1.4.0

### Minor Changes

- Added icons: UTK,UTK,

### Patch Changes

- Updated dependencies
  - @web3icons/core@1.4.0

## 1.3.0

### Minor Changes

- Added icons: ATR,ATR,

### Patch Changes

- Updated dependencies
  - @web3icons/core@1.3.0

## 1.2.0

### Minor Changes

- d930532: Added icons: JUP,JUP,

### Patch Changes

- Updated dependencies [d930532]
  - @web3icons/core@1.2.0
