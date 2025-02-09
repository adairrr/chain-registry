import { Chain } from '@chain-registry/types';
const chains: Chain[] = [
  {
    $schema: '../chain.schema.json',
    chain_name: 'acrechain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://arable.finance/',
    pretty_name: 'Acrechain',
    chain_id: 'acre_9052-1',
    bech32_prefix: 'acre',
    node_home: '$HOME/.acred',
    daemon_name: 'acred',
    key_algos: ['ethsecp256k1'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aacre',
          fixed_min_gas_price: 250000000,
          low_gas_price: 20000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'aacre'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ArableProtocol/acrechain',
      recommended_version: 'v1.1.1',
      compatible_versions: ['v1.1.1'],
      binaries: {},
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ArableProtocol/acrechain/main/networks/mainnet/acre_9052-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ef28f065e24d60df275b06ae9f7fed8ba0823448',
          address: '46.4.81.204:34656',
          provider: 'Kalia Network'
        },
        {
          id: 'e29de0ba5c6eb3cc813211887af4e92a71c54204',
          address: '65.108.1.225:46656',
          provider: 'Ramuchi.tech'
        },
        {
          id: '276be584b4a8a3fd9c3ee1e09b7a447a60b201a4',
          address: '116.203.29.162:26656',
          provider: 'High Stakes'
        },
        {
          id: 'e2d029c95a3476a23bad36f98b316b6d04b26001',
          address: '49.12.33.189:36656',
          provider: 'Stake-Take'
        },
        {
          id: '1264ee73a2f40a16c2cbd80c1a824aad7cb082e4',
          address: '149.102.146.252:26656',
          provider: 'D-Stake'
        },
        {
          id: 'bac90a590452337700e0033315e96430d19a3ffa',
          address: '23.106.238.167:26656',
          provider: 'Synergy Nodes'
        },
        {
          id: 'd86d7a9d8059ae726f3322ff1eb9e2797fe62a72',
          address: '65.108.233.44:26616',
          provider: 'StakeTab'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'acrechain.mainnet.seed.autostake.net:26956',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: 'ef28f065e24d60df275b06ae9f7fed8ba0823448',
          address: '46.4.81.204:34656',
          provider: 'Kalia Network'
        },
        {
          id: 'e29de0ba5c6eb3cc813211887af4e92a71c54204',
          address: '65.108.1.225:46656',
          provider: 'Ramuchi.tech'
        },
        {
          id: '276be584b4a8a3fd9c3ee1e09b7a447a60b201a4',
          address: '116.203.29.162:26656',
          provider: 'High Stakes'
        },
        {
          id: 'e2d029c95a3476a23bad36f98b316b6d04b26001',
          address: '49.12.33.189:36656',
          provider: 'Stake-Take'
        },
        {
          id: '1264ee73a2f40a16c2cbd80c1a824aad7cb082e4',
          address: '149.102.146.252:26656',
          provider: 'D-Stake'
        },
        {
          id: 'bac90a590452337700e0033315e96430d19a3ffa',
          address: '23.106.238.167:26656',
          provider: 'Synergy Nodes'
        },
        {
          id: 'd86d7a9d8059ae726f3322ff1eb9e2797fe62a72',
          address: '65.108.233.44:26616',
          provider: 'StakeTab'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'acrechain.mainnet.peer.autostake.net:26956',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.acre.nodestake.top',
          provider: 'nodestake'
        },
        {
          address: 'https://rpc-acre.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rpc.acrescan.com',
          provider: 'Anonstake'
        },
        {
          address: 'https://rpc-acre.synergynodes.com',
          provider: 'Synergy Nodes'
        },
        {
          address: 'https://rpc-acrechain.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://acre-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      rest: [
        {
          address: 'https://rest.acrescan.com',
          provider: 'Anonstake'
        },
        {
          address: 'https://api-acre.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://lcd-acre.synergynodes.com',
          provider: 'Synergy Nodes'
        },
        {
          address: 'https://api-acrechain.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://acrechain.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://acre-rest.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.acre.nodestake.top',
          provider: 'Nodestake'
        },
        {
          address: 'https://grpc-acre.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://acre-grpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm.acrescan.com',
          provider: 'Anonstake'
        },
        {
          address: 'https://jsonrpc-acre.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rpc2-acre.synergynodes.com',
          provider: 'Synergy Nodes'
        },
        {
          address: 'https://jsonrpc.acre.nodestake.top',
          provider: 'Nodestake'
        }
      ]
    },
    explorers: [
      {
        kind: 'blockscout',
        url: 'https://acrescout.mindheartsoul.org',
        tx_page: 'https://acrescout.mindheartsoul.org/tx/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://acrescan.com',
        tx_page: 'https://acrescan.com/tx/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://acreblockexplorer.jet-node.com',
        tx_page: 'https://acreblockexplorer.jet-node.com/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.nodestake.top/acre',
        tx_page: 'https://explorer.nodestake.top/acre/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://cosmosrun.info/acre-mainnet',
        tx_page: 'https://cosmosrun.info/acre-mainnet/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://exp.nodeist.net/m-acrechain/',
        tx_page: 'https://exp.nodeist.net/m-acrechain/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'agoric',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://agoric.com/',
    pretty_name: 'Agoric',
    chain_id: 'agoric-3',
    bech32_prefix: 'agoric',
    daemon_name: 'agd',
    node_home: '$HOME/.agoric',
    slip44: 564,
    explorers: [
      {
        name: 'bigdipper',
        url: 'https://agoric.bigdipper.live/',
        tx_page: 'https://agoric.bigdipper.live/transactions/${txHash}',
        account_page: 'https://agoric.bigdipper.live/accounts/${accountAddress}'
      },
      {
        name: 'explorers.guru',
        url: 'https://agoric.explorers.guru',
        tx_page: 'https://agoric.explorers.guru/transaction/${txHash}',
        account_page: 'https://agoric.explorers.guru/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/agoric/',
        tx_page: 'https://atomscan.com/agoric/transactions/${txHash}',
        account_page: 'https://atomscan.com/agoric/accounts/${accountAddress}'
      }
    ],
    codebase: {
      git_repo: 'https://github.com/Agoric/agoric-sdk/',
      recommended_version: 'agoric-upgrade-8',
      compatible_versions: ['agoric-upgrade-8'],
      genesis: {
        genesis_url: 'https://main.agoric.net/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14456',
          provider: 'Polkachu'
        },
        {
          id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
          address: 'agoric.rpc.kjnodes.com:27659',
          provider: 'kjnodes'
        }
      ],
      persistent_peers: [
        {
          id: 'a26158a5cbb1df581dd6843ac427191af76d6d5d',
          address: '104.154.240.50:26656'
        },
        {
          id: '6e26a1b4afa6889f841d7957e8c2b5d50d32d485',
          address: '95.216.53.26:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://main.rpc.agoric.net:443'
        },
        {
          address: 'https://agoric-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.agoric.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://agoric.rpc.kjnodes.com',
          provider: 'kjnodes'
        }
      ],
      rest: [
        {
          address: 'https://main.api.agoric.net:443'
        },
        {
          address: 'https://api.agoric.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://agoric-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://agoric.api.kjnodes.com',
          provider: 'kjnodes'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.agoric.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'agoric-grpc.polkachu.com:14490',
          provider: 'Polkachu'
        }
      ]
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'aioz',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://aioz.network/',
    pretty_name: 'AIOZ Network',
    chain_id: 'aioz_168-1',
    bech32_prefix: 'aioz',
    daemon_name: 'aiozd',
    node_home: '$HOME/.aioz',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'attoaioz',
          fixed_min_gas_price: 1000000000
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/AIOZNetwork/go-aioz',
      recommended_version: 'v1.2.0',
      compatible_versions: ['v1.2.0'],
      binaries: {
        'linux/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-linux-amd64.tar.gz',
        'darwin/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-darwin-amd64.tar.gz',
        'windows/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-windows-amd64.zip'
      },
      genesis: {
        genesis_url: 'https://archive.aioz.network/aioz_168-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'aab202d5648772a8b5be3db575a8a7dd577db78f',
          address: '167.172.6.76:26656'
        },
        {
          id: 'ef834ca8044d345db334fbf6a6bfe7230f429739',
          address: '35.236.45.174:26656'
        },
        {
          id: 'b13a849f59ff3e0558d248c3e9eb9bf4a360bb77',
          address: '20.187.94.254:26656'
        },
        {
          id: '849e6023440355412bc9a9d5bc0731143e7d657a',
          address: '13.53.208.41:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'aab202d5648772a8b5be3db575a8a7dd577db78f',
          address: '167.172.6.76:26656'
        },
        {
          id: 'ef834ca8044d345db334fbf6a6bfe7230f429739',
          address: '35.236.45.174:26656'
        },
        {
          id: 'b13a849f59ff3e0558d248c3e9eb9bf4a360bb77',
          address: '20.187.94.254:26656'
        },
        {
          id: '849e6023440355412bc9a9d5bc0731143e7d657a',
          address: '13.53.208.41:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-dataseed.aioz.network:443',
          provider: 'AIOZ Network'
        }
      ],
      rest: [
        {
          address: 'https://lcd-dataseed.aioz.network',
          provider: 'AIOZ Network'
        }
      ],
      grpc: [
        {
          address: 'https://grpc-dataseed.aioz.network:443',
          provider: 'AIOZ Network'
        }
      ],
      'evm-jsonrpc': [
        {
          address: 'https://eth-dataseed.aioz.network',
          provider: 'AIOZ Network'
        }
      ]
    },
    explorers: [
      {
        kind: 'aioz',
        url: 'https://explorer.aioz.network',
        tx_page: 'https://explorer.aioz.network/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'akash',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://akash.network/',
    pretty_name: 'Akash',
    chain_id: 'akashnet-2',
    bech32_prefix: 'akash',
    daemon_name: 'akash',
    node_home: '$HOME/.akash',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uakt',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uakt'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ovrclk/akash/',
      recommended_version: 'v0.20.0',
      compatible_versions: ['v0.20.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ovrclk/akash/releases/download/v0.20.0/akash_0.20.0_linux_amd64.zip',
        'linux/arm64':
          'https://github.com/ovrclk/akash/releases/download/v0.20.0/akash_0.20.0_linux_arm64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ovrclk/net/master/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '4acf579e2744268f834c713e894850995bbf0ffa',
          address: '50.18.31.225:26656'
        },
        {
          id: '3691ac1f56389ffec8579c13a6eb8eca41cf8ae3',
          address: '54.219.88.246:26656'
        },
        {
          id: '86afe23f116ba4754a19819a55d153008eb74b48',
          address: '15.164.87.75:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12856',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12856',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'akash.mainnet.seed.autostake.net:26696',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '5e37aefd2a0b9d036b1609a45d6487606da0204b',
          address: 'rpc.ny.akash.farm:26656'
        },
        {
          id: '8d334fff41adeb68f186265d5f1f76614ef63d8d',
          address: 'rpc.nl.akash.farm:26656'
        },
        {
          id: '47f7b7a021497ad7a338ea041f19a1a11ae06795',
          address: 'rpc.la.akash.farm:26656'
        }
      ],
      persistent_peers: [
        {
          id: '4acf579e2744268f834c713e894850995bbf0ffa',
          address: '50.18.31.225:26656'
        },
        {
          id: '3691ac1f56389ffec8579c13a6eb8eca41cf8ae3',
          address: '54.219.88.246:26656'
        },
        {
          id: '86afe23f116ba4754a19819a55d153008eb74b48',
          address: '15.164.87.75:26656'
        },
        {
          id: '43544bc781b88d6785420427926d86a5332940b3',
          address: '142.132.131.184:26656'
        },
        {
          id: '30b8008d4ea5069a8724a0aa73833493efa88e67',
          address: '65.108.140.62:26656'
        },
        {
          id: '2b19780ea3de3553f03847a397ac2dfda1d2e89e',
          address: '65.108.6.185:26656'
        },
        {
          id: 'be3a538cebb28e7224db10920bb7fe32456e1aad',
          address: '116.202.244.153:26656'
        },
        {
          id: 'd2643edd1b3dce6615bc9925e20122c44d2ff763',
          address: '172.106.17.158:26656'
        },
        {
          id: '08fd59378ec5845a667f8608bd228f9251aec035',
          address: '3.64.67.110:27002'
        },
        {
          id: '6acf80cdbfba5ffbee23bd9e5b3ecac3234f3420',
          address: '147.75.32.107:26656'
        },
        {
          id: '20180c45451739668f6e272e007818139dba31e7',
          address: '88.198.62.198:2020'
        },
        {
          id: '89b5c363babe7c4983c3ef06c3c9ed1e39ec4246',
          address: '51.79.176.202:56656'
        },
        {
          id: '1c03b13f5f24f59ecc3cfe5d5fc36dabee3a5d78',
          address: '144.202.77.146:26656'
        },
        {
          id: '070b3c936e2995bc269a2981702b87de05411baa',
          address: '148.251.13.186:28656'
        },
        {
          id: '05c30fd95b888ca8df8171ce65a06f1de683d6e3',
          address: '84.252.129.17:26656'
        },
        {
          id: 'b618556645ddac41dc871f7a0f6aa68feb0cc2a7',
          address: '38.75.137.161:26656'
        },
        {
          id: '97edd562862a905f087ccb02a39e6f660939e314',
          address: '216.202.234.76:26656'
        },
        {
          id: '06788f62811879e1d0774c4e9152543e17fe8576',
          address: '145.40.65.227:26656'
        },
        {
          id: '2ecb6e24df48ee037234222c67ef963daa58bcfc',
          address: '65.108.102.99:29656'
        },
        {
          id: '4e95c8f651de136b48c324ea9a687739a945f452',
          address: '185.107.95.88:26656'
        },
        {
          id: '1bfbbf77beeb2c1ace50443478035a255a7e510f',
          address: '136.24.44.100:26656'
        },
        {
          id: 'ce137ea95720b2d4e196920d12170d1a6aebcf69',
          address: '35.215.43.253:26656'
        },
        {
          id: 'fb42bcf141eecc7a8a66fcfbf7d2573b3b8d00e6',
          address: '75.119.133.59:26656'
        },
        {
          id: 'c6e0e5460aefcf3c5d5d26dee1ef1e99e5ed90b8',
          address: '198.57.27.14:26656'
        },
        {
          id: '2640152c6359b03a3a4559b12110e96fcb95cd68',
          address: '74.91.27.138:26656'
        },
        {
          id: 'aa01698ec0d8bb96398e89b57ecb08bcca50fa21',
          address: '65.21.199.148:26636'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'akash.mainnet.peer.autostake.net:26696',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.akash.forbole.com:443',
          provider: 'forbole'
        },
        {
          address: 'https://rpc-akash.ecostake.com:443',
          provider: 'ecostake'
        },
        {
          address: 'https://akash-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes'
        },
        {
          address: 'https://akash-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-akash-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'http://akash.c29r3.xyz:80/rpc',
          provider: 'c29r3'
        },
        {
          address: 'https://akash.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        }
      ],
      rest: [
        {
          address: 'https://api.akash.forbole.com:443',
          provider: 'forbole'
        },
        {
          address: 'https://rest-akash.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://akash-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes'
        },
        {
          address: 'https://akash-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-akash-ia.cosmosia.notional.ventures',
          provider: 'Notional'
        },
        {
          address: 'https://akash.c29r3.xyz:443/api',
          provider: 'c29r3'
        },
        {
          address: 'https://akash.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://akash.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-akash-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://akash-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'akash-grpc.polkachu.com:12890',
          provider: 'Polkachu'
        },
        {
          address: 'akash.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/akash',
        tx_page: 'https://ezstaking.tools/akash/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/akash',
        tx_page: 'https://www.mintscan.io/akash/txs/${txHash}',
        account_page: 'https://www.mintscan.io/akash/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/akash-network',
        tx_page: 'https://ping.pub/akash-network/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://akash.bigdipper.live/',
        tx_page: 'https://akash.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/akash',
        tx_page: 'https://atomscan.com/akash/transactions/${txHash}'
      },
      {
        kind: 'cloudmos',
        url: 'https://cloudmos.io/blocks',
        tx_page: 'https://cloudmos.io/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'arkh',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://arkh.com/',
    pretty_name: 'Arkhadian',
    chain_id: 'arkh',
    bech32_prefix: 'arkh',
    daemon_name: 'arkhd',
    node_home: '$HOME/.arkhd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uarkh',
          fixed_min_gas_price: 1e-9
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/vincadian/arkh-blockchain',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://github.com/vincadian/arkh-blockchain/blob/master/genesis/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '808f01d4a7507bf7478027a08d95c575e1b5fa3c',
          address: 'asc-dataseed.arkhadian.com:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://asc-dataseed.arkhadian.com/',
          provider: 'arkhnetwork'
        }
      ],
      rest: [
        {
          address: 'https://asc-blockchain-api.arkhadian.com/',
          provider: 'arkhnetwork'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://testnet.ping.pub/arkh',
        tx_page: 'https://testnet.ping.pub/arkh/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'assetmantle',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://assetmantle.one/',
    pretty_name: 'AssetMantle',
    chain_id: 'mantle-1',
    bech32_prefix: 'mantle',
    daemon_name: 'mantleNode',
    node_home: '$HOME/.mantleNode',
    codebase: {
      git_repo: 'https://github.com/AssetMantle/node.git',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/AssetMantle/genesisTransactions/main/mantle-1/final_genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14656',
          provider: 'Polkachu'
        },
        {
          id: '990557213003ab234cc03307d02688c30357fed6',
          address: 'seeds.whispernode.com:14656',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '95a7b7eed1f5cd2894574bf0da4b884243e7d0f3',
          address: '43.204.38.118:26656'
        },
        {
          id: '0a58c9bbb5d7551eebb8e4ac79bd97f580aaf269',
          address: '65.0.131.189:26656'
        },
        {
          id: '800a9f991c0bf2dba8ec9370f41951dab5927b32',
          address: '3.110.89.133:26656'
        },
        {
          id: '5f72cdfd9adbb20cd880fd0d93943d40c426b5c2',
          address: '35.154.27.208:26656'
        },
        {
          id: '1048f75cdd92eedbe3935d07ccf662b45aa6c5f7',
          address: '15.206.189.215:26656'
        },
        {
          id: 'a2289be9268ad08db32a59ef8dc243476d5c6f6a',
          address: '3.108.2.18:26656'
        },
        {
          id: '4923caf1572e8925519fcd9eca27cc70c803d7d6',
          address: '3.108.218.178:26656'
        },
        {
          id: '4c39bda705c8c8993f8a989e1375720352d9573f',
          address: '65.0.45.61:26656'
        },
        {
          id: '8392653526200f757190c1f88ffd69726a20055b',
          address: '3.110.74.167:26656'
        },
        {
          id: '7da33184073d211e625848ce4ef2ba50cf5eeb36',
          address: '13.234.225.229:26656'
        },
        {
          id: '880a8fc1a21d2908bd109dab1a2a074ebddec18a',
          address: '65.108.192.170:26656'
        },
        {
          id: '88873cf28bc552d39d4cb10523167aa24c3a4e85',
          address: '95.217.118.96:26876'
        },
        {
          id: 'f96b29b7df3fe6a59fc11bde6936d7109e66515b',
          address: '65.21.237.29:26656'
        },
        {
          id: 'b5c9a4607fc0494b25b703d08c4601ce44027215',
          address: '162.55.246.236:26656'
        },
        {
          id: '5d3d2807baa4cd191205749a63cc30aab6a3caa1',
          address: '65.108.7.28:26656'
        },
        {
          id: '615e815366defb4c194233ea03c9879f183d49b9',
          address: '65.108.199.26:26656'
        },
        {
          id: '4654c8bed4349e4800238cff1f88e97c1f880080',
          address: '207.244.245.125:26656'
        },
        {
          id: '5622cc659818baa12ae9fa7f58bb8c0be23366fe',
          address: '52.8.59.124:26656'
        },
        {
          id: 'c27d512e10d48e921e4fe88f0221a4e2c80567f1',
          address: '13.56.34.84:26656'
        },
        {
          id: 'a7aafd3330e57d3104be5b2820b6ad2d52ac19ec',
          address: '3.39.94.36:26656'
        },
        {
          id: '9c97f6143d3fae032af5f155d472bbc52f4d90b3',
          address: '194.34.232.225:26656'
        },
        {
          id: 'f61e5c1d7897dd445508a873248e57ae553ac258',
          address: '91.230.111.86:26656'
        },
        {
          id: 'f073d57107004268a7c0f1e24433401f892eff94',
          address: 'sentry-1.asset-mantle.ezstaking.xyz:26229',
          provider: 'EZStaking.io'
        },
        {
          id: '68692140af51d0c41163340f6f1222eec914c18f',
          address: 'sentry-2.asset-mantle.ezstaking.xyz:26746',
          provider: 'EZStaking.io'
        },
        {
          id: '01e2e8547bd17890a7af54d236ae19d16cb1b224',
          address: '65.108.201.154:2050'
        },
        {
          id: 'ac4512cf8969a9602b6c046be6fd24b9b3ecc2d7',
          address: '142.132.202.10:26656'
        },
        {
          id: 'fd096224f9c918089410ac7ab6d42d21ec87db60',
          address: '65.21.230.230:26656'
        },
        {
          id: 'cc938d4354c61e4f59b9626737c2aa1e448f4d57',
          address: '5.161.80.214:26656'
        },
        {
          id: 'cbb1bb6b073e65bb5a9a349e8ac2bb86348b5da1',
          address: '142.132.210.135:26656'
        },
        {
          id: 'ab19fe08d8587df7a0aaec966198425a91de6278',
          address: '159.89.162.214:26656'
        },
        {
          id: 'efcdd119e9a0f1ac5718c225e425aa1c0121b020',
          address: '65.20.97.129:26656'
        },
        {
          id: 'f33b2125c3b3a7c4838e22a060e38d2cefd66e78',
          address: '65.108.140.109:26656'
        },
        {
          id: '202c1e6de51f0d89872e62c8b8f998f479f17f12',
          address: '51.195.233.194:26656'
        },
        {
          id: 'f3210561bcfb3252343192c14f8364c14084749a',
          address: '135.125.5.48:26656'
        },
        {
          id: '60a13d44a8ae4165e83e4c3564b0bf36f5ae2615',
          address: '43.254.41.55:26656'
        },
        {
          id: 'c64d745a479936d0b482c28239effd2e9fe24bf5',
          address: '45.77.144.250:26656'
        },
        {
          id: '6261de9dac635a8fd8d19a70afc41f845c59db96',
          address: '116.203.35.46:26656'
        },
        {
          id: 'af80c95f95301fab1778a722a0d8596ca10006cc',
          address: '136.243.105.182:26656'
        },
        {
          id: 'df406a21ac70fbcd7ae06448fe0e7b428385ec6f',
          address: '65.21.195.98:26656'
        },
        {
          id: 'e401ef970f15ed0da7321eb9401ada0729b12c8d',
          address: '157.90.248.195:26656'
        },
        {
          id: 'e0deea2d5c15e77c9d5934305bb23148ce836709',
          address: '185.252.232.79:26656'
        },
        {
          id: 'bbf9c162fbcfbf3dc2c07a7a4ad19d84570ee290',
          address: '161.97.140.10:26656'
        },
        {
          id: 'f2b185dbf88277878b4989db31ac40a606829429',
          address: '65.108.41.72:26656'
        },
        {
          id: '8034d1f19724d11be0ad108ac54c63ead4705237',
          address: '3.110.47.238:26656'
        },
        {
          id: '1f28c7cd884a76a022038f22923eea8101d3538f',
          address: '168.119.89.31:26656'
        },
        {
          id: 'd0dc9234db7b9e5bb853afbd96055c46990aa55f',
          address: '65.21.131.144:29656'
        },
        {
          id: '7eeb595f1205c2c7230b3812badb1844185b3727',
          address: '65.108.99.224:46656'
        },
        {
          id: '553d4a0727b3ee95208d3553e8e82175302ebeb9',
          address: '95.217.109.143:56656'
        },
        {
          id: '606b884008171f6fa8a475d4e63a79fb8dd77c38',
          address: '51.250.107.51:26656'
        },
        {
          id: 'd2515865c79d286da7abe1007959af1b238278bf',
          address: '212.109.220.122:26656'
        },
        {
          id: '4fc4fa6ec44f6da10830ffcb6344a8635156e11e',
          address: '141.95.65.26:26656'
        },
        {
          id: '2968bf003604fc82ead6a0aea7b718d97a307892',
          address: '54.205.3.65:26656'
        },
        {
          id: '306f47eba6711ec325ddb692c988cadadb83b4b7',
          address: '144.126.136.22:26656'
        },
        {
          id: 'adfcaf7a4d5b388aff901136a9d64423ef2215f9',
          address: '88.99.216.14:26456'
        },
        {
          id: '77d64fd4c97a849d781913c8fe1b737cfb31957a',
          address: '134.209.139.2:15656'
        },
        {
          id: '7362b3c4d082680aeffe137d18cea0e37cab5037',
          address: '146.19.24.101:26656'
        },
        {
          id: '5e8e8e7071259beb3b32e39cb3d2bb059cff4d66',
          address: '65.108.137.22:26656'
        },
        {
          id: 'eef583258a773765e556fa723bae76d572933eaa',
          address: '23.88.37.143:21356'
        },
        {
          id: '37648e05b086bb98432a1115fdacd9ce36c70a4d',
          address: '142.4.216.69:26656'
        },
        {
          id: 'ae4f04cea40f6d6047ed2baf3483b5ca6fce3482',
          address: '154.12.242.63:26656'
        },
        {
          id: '8f47445897afc72dec187d65f8cbf14f5ed5c86f',
          address: '88.99.166.120:26656'
        },
        {
          id: '201aa01ed819a3544c77b8e12343c832a20f8136',
          address: '49.12.189.127:26656'
        },
        {
          id: '8a152dd74a1f1f43895d3065686bdec7fb4510e7',
          address: '65.21.89.42:29656'
        },
        {
          id: '169a3e12d45903d961ace560a384d3bcb55092e2',
          address: '3.137.211.131:26656'
        },
        {
          id: '38f4504f74a9fd70f158270751c31a4d146f987c',
          address: '65.21.226.249:26616'
        },
        {
          id: 'aa4cbf8284512c7d10dbc0542604f1fb89e1646b',
          address: '95.165.150.165:26956'
        },
        {
          id: '20dbc8f0c0fe5aeadde86976149b70e20fb2e87d',
          address: '95.217.73.93:24656'
        },
        {
          id: '7170a9a965b53966b5232fb64f02fbd260e26b82',
          address: '116.203.47.250:26656'
        },
        {
          id: '5b3c90e6c07e03ffddc5dc3aae786a2990bc5bd3',
          address: '148.251.81.179:26656'
        },
        {
          id: '7ae8a8e62efcccf15198525868b0873b3c9bd698',
          address: '65.108.121.37:36656'
        },
        {
          id: '681ffbadff88c900660d2bc6bce0920929b529f7',
          address: '62.171.153.122:26656'
        },
        {
          id: '13e82c193914d0db037566ff0e59dfd38ccf5193',
          address: '35.154.66.182:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.assetmantle.one/',
          provider: 'AssetMantle'
        },
        {
          address: 'https://rpc-assetmantle.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://assetmantle-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.assetmantle.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-assetmantle-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-assetmanle.d-stake.xyz',
          provider: 'D-stake'
        }
      ],
      rest: [
        {
          address: 'https://rest.assetmantle.one/',
          provider: 'AssetMantle'
        },
        {
          address: 'https://rest-assetmantle.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api.assetmantle.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-assetmantle-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://assetmantle-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-assetmanle.d-stake.xyz',
          provider: 'D-stake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.assetmantle.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'grpc-assetmantle-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'assetmantle-grpc.polkachu.com:14690',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc-assetmanle.d-stake.xyz',
          provider: 'D-stake'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/assetmantle',
        tx_page: 'https://ezstaking.tools/assetmantle/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/asset-mantle',
        tx_page: 'https://www.mintscan.io/asset-mantle/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/asset-mantle/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.postcapitalist.io/AssetMantle',
        tx_page: 'https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}'
      },
      {
        kind: 'other',
        url: 'https://explorer.assetmantle.one',
        tx_page: 'https://explorer.assetmantle.one/transactions/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://assetmantle.explorers.guru',
        tx_page: 'https://assetmantle.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/assetmantle',
        tx_page: 'https://atomscan.com/assetmantle/transactions/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'axelar',
    chain_id: 'axelar-dojo-1',
    pretty_name: 'Axelar',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://axelar.network/',
    bech32_prefix: 'axelar',
    daemon_name: 'axelard',
    node_home: '$HOME/.axelard',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uaxl',
          fixed_min_gas_price: 0.007
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/axelarnetwork/axelar-core',
      recommended_version: 'v0.29.0',
      compatible_versions: ['v0.29.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/axelarnetwork/axelar-core/releases/download/v0.29.0/axelard-linux-amd64-v0.29.0',
        'darwin/amd64':
          'https://github.com/axelarnetwork/axelar-core/releases/download/v0.29.0/axelard-darwin-amd64-v0.29.0'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/axelarnetwork/axelarate-community/main/resources/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '3d67d0646cddcc203b41434aceea64ade22ba6fc',
          address:
            'k8s-mainnet-axelarco-79b464ee93-f03cb16c57cf7cb2.elb.us-east-2.amazonaws.com:26656',
          provider: 'axelar-core'
        },
        {
          id: '9c9b8eb8cad8648f31d3c9da3d14e825f11a7b52',
          address: 'public-seed.mainnet.axelar.lunanova.tech:26656',
          provider: 'lunanova'
        },
        {
          id: '82846f20e20dc80191bc96aa4c72321dd338faa7',
          address: '207.180.252.206:26656',
          provider: 'chainode'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15156',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'axelar.mainnet.seed.autostake.net:26826',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '1e5c0b8f4431b0881edbd04537f4351bd7f19afc',
          address: 'seeds.whispernode.com:15156',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '353f7d0962594bcbfb63c81594e35e39c4c89a1a',
          address: '18.223.127.165:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'axelar.mainnet.peer.autostake.net:26826',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-axelar.imperator.co:443',
          provider: 'Imperator.co'
        },
        {
          address: 'https://axelar-rpc.quickapi.com:443',
          provider: 'chainlayer'
        },
        {
          address: 'https://axelar-rpc.chainode.tech:443',
          provider: 'Chainode'
        },
        {
          address: 'https://axelar-rpc.pops.one:443',
          provider: 'p-ops'
        },
        {
          address: 'https://axelar-rpc.qubelabs.io:443',
          provider: 'Qubelabs'
        },
        {
          address: 'https://rpc-1.axelar.nodes.guru:443',
          provider: 'nodes.guru'
        },
        {
          address: 'https://axelar.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rpc-axelar-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://axelar-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://axelar.rpc.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://rpc.axelar.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://axelar-rpc.validatrium.club',
          provider: 'Validatrium'
        },
        {
          address: 'https://rpc-axelar.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://axelar-rpc.quantnode.tech/',
          provider: 'QuantNode'
        }
      ],
      rest: [
        {
          address: 'https://lcd-axelar.imperator.co:443',
          provider: 'Imperator.co'
        },
        {
          address: 'https://axelar-lcd.quickapi.com:443',
          provider: 'chainlayer'
        },
        {
          address: 'https://axelar-rest.chainode.tech:443',
          provider: 'Chainode'
        },
        {
          address: 'https://axelar-lcd.qubelabs.io:443',
          provider: 'Qubelabs'
        },
        {
          address: 'https://api-1.axelar.nodes.guru:443',
          provider: 'nodes.guru'
        },
        {
          address: 'https://axelar.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://api-axelar-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://axelar-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://axelar.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://api.axelar.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://axelar-api.validatrium.club',
          provider: 'Validatrium'
        },
        {
          address: 'https://lcd-axelar.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://axelar.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://axelar-lcd.quantnode.tech/',
          provider: 'QuantNode'
        }
      ],
      grpc: [
        {
          address: 'axelar-grpc.chainode.tech',
          provider: 'Chainode'
        },
        {
          address: 'axelar-grpc.qubelabs.io:9092',
          provider: 'Qubelabs'
        },
        {
          address: 'axelar-grpc.quantnode.tech:9090',
          provider: 'Quantnode'
        },
        {
          address: 'services.staketab.com:9080',
          provider: 'Staketab'
        },
        {
          address: 'grpc-axelar-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'axelar.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'axelar-grpc.polkachu.com:15190',
          provider: 'Polkachu'
        },
        {
          address: 'axelar.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        },
        {
          address: 'grpc.axelar.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        }
      ],
      'grpc-web': [
        {
          address: 'axelar-grpcweb.chainode.tech',
          provider: 'Chainode'
        },
        {
          address: 'axelar-grpcweb.quantnode.tech:9091',
          provider: 'Quantnode'
        }
      ]
    },
    explorers: [
      {
        kind: 'axelarscan',
        url: 'https://axelarscan.io',
        tx_page: 'https://axelarscan.io/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/axelar',
        tx_page: 'https://www.mintscan.io/axelar/txs/${txHash}',
        account_page: 'https://www.mintscan.io/axelar/account/${accountAddress}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://axelar.explorers.guru',
        tx_page: 'https://axelar.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/axelar',
        tx_page: 'https://atomscan.com/axelar/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bandchain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://bandprotocol.com/',
    pretty_name: 'Band Protocol',
    chain_id: 'laozi-mainnet',
    daemon_name: 'bandd',
    node_home: '$HOME/.band',
    bech32_prefix: 'band',
    slip44: 494,
    codebase: {
      git_repo: 'https://github.com/bandprotocol/chain',
      recommended_version: 'v2.3.5',
      compatible_versions: ['v2.3.5'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a',
          address: '34.87.86.195:26656'
        },
        {
          id: '543e0cab9c3016a0e99775443a17bcf163038912',
          address: '34.150.156.78:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'bandchain.mainnet.seed.autostake.net:26666',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: '98823087b61d442a4ab86998709c77b2e517ee78',
          address: '35.240.152.216:26656'
        },
        {
          id: '3ea84babead3d6bc488810a0f2cf0744cf5c68fe',
          address: '34.86.22.251:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'bandchain.mainnet.peer.autostake.net:26666',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://rpc.laozi1.bandchain.org:80',
          provider: 'bandprotocol'
        },
        {
          address: 'https://rpc-bandchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://band-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        }
      ],
      rest: [
        {
          address: 'https://laozi1.bandchain.org/api',
          provider: 'bandprotocol'
        },
        {
          address: 'https://api-bandchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://band-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://bandchain.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-bandchain-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'cosmoscan',
        url: 'https://cosmoscan.io',
        tx_page: 'https://cosmoscan.io/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/band',
        tx_page: 'https://www.mintscan.io/band/txs${txHash}',
        account_page: 'https://www.mintscan.io/band/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/band-protocol',
        tx_page: 'https://ping.pub/band-protocol/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/band-protocol',
        tx_page: 'https://atomscan.com/band-protocol/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'beezee',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'BeeZee',
    chain_id: 'beezee-1',
    bech32_prefix: 'bze',
    daemon_name: 'bzed',
    node_home: '$HOME/.bze',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ubze',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/bze-alphateam/bze',
      recommended_version: 'v5.1.2',
      compatible_versions: ['v5.1.2'],
      binaries: {
        'darwin/amd64':
          'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-amd64.tar.gz',
        'darwin/arm64':
          'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-darwin-arm64.tar.gz',
        'linux/amd64':
          'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-amd64.tar.gz',
        'linux/arm64':
          'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-linux-arm64.tar.gz',
        'windows/amd64':
          'https://github.com/bze-alphateam/bze/releases/download/v5.1.2/bze-5.1.2-win64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/bze-alphateam/bze/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '6385d5fb198e3a793498019bb8917973325e5eb7',
          address: '51.15.138.216:26656',
          provider: 'AlphaTeam'
        }
      ],
      persistent_peers: [
        {
          id: '6385d5fb198e3a793498019bb8917973325e5eb7',
          address: '51.15.228.169:26656',
          provider: 'AlphaTeam'
        },
        {
          id: 'ce25088267cef31f3be1ec03263524764c5c80bb',
          address: '163.172.130.162:26656',
          provider: 'AlphaTeam'
        },
        {
          id: '2624d40b8861415e004d4532bb7d8d90dd0e6e66',
          address: '51.15.115.192:26656',
          provider: 'AlphaTeam'
        },
        {
          id: 'f238198a75e886a21cd0522b6b06aa019b9e182e',
          address: '51.15.55.142:26656',
          provider: 'AlphaTeam'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.getbze.com',
          provider: 'AlphaTeam'
        },
        {
          address: 'https://rpc-1.getbze.com',
          provider: 'AlphaTeam'
        },
        {
          address: 'https://rpc-2.getbze.com',
          provider: 'AlphaTeam'
        }
      ],
      rest: [
        {
          address: 'https://rest.getbze.com',
          provider: 'AlphaTeam'
        },
        {
          address: 'https://rest-1.getbze.com',
          provider: 'AlphaTeam'
        },
        {
          address: 'https://rest-2.getbze.com',
          provider: 'AlphaTeam'
        }
      ],
      grpc: [
        {
          address: '144.91.122.246:9999',
          provider: 'AlphaTeam'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://explorers.vidulum.app/beezee',
        tx_page: 'https://explorers.vidulum.app/beezee/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.erialos.me/beezee',
        tx_page: 'https://explorer.erialos.me/beezee/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bitcanna',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.bitcanna.io/',
    pretty_name: 'BitCanna',
    chain_id: 'bitcanna-1',
    bech32_prefix: 'bcna',
    daemon_name: 'bcnad',
    node_home: '$HOME/.bcna',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ubcna',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/BitCannaGlobal/bcna',
      recommended_version: 'v1.5.3',
      compatible_versions: ['v1.5.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/BitCannaGlobal/bcna/releases/download/v1.5.3/bcnad'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd6aa4c9f3ccecb0cc52109a95962b4618d69dd3f',
          address: 'seed1.bitcanna.io:26656',
          provider: 'bitcanna'
        },
        {
          id: '23671067d0fd40aec523290585c7d8e91034a771',
          address: 'seed2.bitcanna.io:26656',
          provider: 'bitcanna'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13056',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:13056',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'f0e6c86d769bf5c52f78e01864091690e731643f',
          address: 'bitcanna-seed.panthea.eu:37656',
          provider: 'Panthea EU'
        }
      ],
      persistent_peers: [
        {
          id: '21484408a7bcf0134689ddf52a7d9c8299cb65b5',
          address: '176.9.139.74:36656',
          provider: 'BitCanna'
        },
        {
          id: '3cdfe02efd4432280707d2949e064a9d8db412b3',
          address: '178.62.98.158:26656',
          provider: 'Stakely'
        },
        {
          id: 'd806bb39349751c142627a547c23c586a787ef26',
          address: '138.68.78.210:26656',
          provider: 'Stakely'
        },
        {
          id: 'ddb620e7c7a6b5a8a53352037cde927681012ab4',
          address: '65.21.229.209:37656',
          provider: 'Blockscope'
        },
        {
          id: 'df99de6cec9152c517990317b340b8b9a307493c',
          address: '193.34.144.156:26656',
          provider: 'ParanormalBrothers'
        },
        {
          id: '0a658df9d9fab096983a12e6f878e87281a15ce6',
          address: 'bitcanna-peer.panthea.eu:27656',
          provider: 'Panthea EU'
        },
        {
          id: '57a3e858a5c860e6355683c88add28d52df6c24a',
          address: '38.242.232.202:26656',
          provider: 'Inter Blockchain Services'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.bitcanna.io/',
          provider: 'bitcanna'
        },
        {
          address: 'http://bcna.paranorm.pro/',
          provider: 'ParanormalBrothers'
        },
        {
          address: 'https://bitcanna-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-bitcanna-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://bitcanna-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://bcna-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://bitcanna-rpc.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://bitcanna.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rpc-bcna.kjinc.io/',
          provider: 'KJINC.io'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.bitcanna.io',
          provider: 'bitcanna'
        },
        {
          address: 'grpc-bitcanna-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'bitcanna-grpc.polkachu.com:13090',
          provider: 'Polkachu'
        },
        {
          address: 'https://bitcanna-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://bitcanna.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://lcd.bitcanna.io',
          provider: 'bitcanna'
        },
        {
          address: 'https://api-bitcanna-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://bitcanna-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://bitcanna-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://bcna-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://bitcanna-api.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://bitcanna.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://api-bcna.kjinc.io/',
          provider: 'KJINC.io'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/bitcanna',
        tx_page: 'https://ezstaking.tools/bitcanna/txs/${txHash}'
      },
      {
        kind: 'forbole',
        url: 'https://cosmos-explorer.bitcanna.io',
        tx_page: 'https://cosmos-explorer.bitcanna.io/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/bitcanna',
        tx_page: 'https://ping.pub/bitcanna/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/bitcanna/',
        tx_page: 'https://www.mintscan.io/bitcanna/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/bitcanna/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bitcanna',
        tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bitsong',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://bitsong.io/',
    pretty_name: 'BitSong',
    chain_id: 'bitsong-2b',
    bech32_prefix: 'bitsong',
    slip44: 639,
    daemon_name: 'bitsongd',
    node_home: '$HOME/.bitsongd',
    codebase: {
      git_repo: 'https://github.com/bitsongofficial/go-bitsong',
      recommended_version: 'v0.12.0',
      compatible_versions: ['v0.12.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json'
      }
    },
    fees: {
      fee_tokens: [
        {
          denom: 'ubtsg',
          fixed_min_gas_price: 0
        }
      ]
    },
    peers: {
      persistent_peers: [
        {
          id: 'a62038142844828483dbf16fa6dd159f6857c81b',
          address: '173.212.247.98:26656'
        },
        {
          id: 'e9fea0509b1a2d16a10ef9fdea0a4e3edc7ca485',
          address: '185.144.83.158:26656'
        },
        {
          id: '8208adac8b09f3e2499dfaef24bb89a2d190a7a3',
          address: '164.68.109.246:26656'
        },
        {
          id: 'cf031ac1cf44c9c311b5967712899391a434da9a',
          address: '161.97.97.61:26656'
        },
        {
          id: 'd6b2ae82c38927fa7b7630346bd84772e632983a',
          address: '157.90.95.104:15631'
        },
        {
          id: 'a5885669c1f7860bfe28071a7ec00cc45b2fcbc3',
          address: '144.91.85.56:26656'
        },
        {
          id: '325a5920a614e2375fea90f8a08d8b8d612fdd1e',
          address: '137.74.18.30:26656'
        },
        {
          id: 'ae2787a337c3599b16410f3ac09d6918da2e5c37',
          address: '46.101.238.149:26656'
        },
        {
          id: '9336f75cd99ff6e5cdb6335e8d1a2c91b81d84b9',
          address: '65.21.0.232:26656'
        },
        {
          id: '9c6e52e78f112a55146b09110d1d1be47702df27',
          address: '135.181.211.184:36656'
        },
        {
          id: '2cd6bb75fc9279c62c0ef3af82fbe08632743472',
          address: 'bitsong-peer.panthea.eu:31656',
          provider: 'Panthea EU'
        }
      ],
      seeds: [
        {
          id: 'ffa27441ca78a5d41a36f6d505b67a145fd54d8a',
          address: '95.217.156.228:26656'
        },
        {
          id: 'efd52c1e56b460b1f37d73c8d2bd5f860b41d2ba',
          address: '65.21.62.83:26656'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16056',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '10de6c207e60b876bdd88571db44d29c18d0cb5d',
          address: 'seed-bitsong.starsquid.io:15605',
          provider: 'Starsquid'
        },
        {
          id: '8defec7d0eec97f507411e02fd2634e3efc997a2',
          address: 'bitsong-seed.panthea.eu:41656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-bitsong.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rpc.bitsong.interbloc.org',
          provider: 'interbloc'
        },
        {
          address: 'https://rpc-bitsong-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.explorebitsong.com',
          provider: 'stake.systems'
        },
        {
          address: 'https://bitsong-rpc.validatrium.club',
          provider: 'Validatrium'
        },
        {
          address: 'https://bitsong-archive.validatrium.club',
          provider: 'Validatrium',
          archive: true
        },
        {
          address: 'https://rpc.bitsong.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc.bitsong.freak12techno.io/',
          provider: 'freak12techno'
        },
        {
          address: 'https://bitsong-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-bitsong.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://bitsong-rpc.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://rpc-bitsong.architectnodes.com',
          provider: 'Architect Nodes'
        }
      ],
      rest: [
        {
          address: 'https://lcd-bitsong.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://api.bitsong.interbloc.org',
          provider: 'interbloc'
        },
        {
          address: 'https://api-bitsong-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd.explorebitsong.com/',
          provider: 'stake.systems'
        },
        {
          address: 'https://bitsong-api.validatrium.club',
          provider: 'Validatrium'
        },
        {
          address: 'https://api.bitsong.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api.bitsong.freak12techno.io/',
          provider: 'freak12techno'
        },
        {
          address: 'https://bitsong-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-bitsong.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://bitsong-api.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://rest-bitsong.architectnodes.com',
          provider: 'Architect Nodes'
        }
      ],
      grpc: [
        {
          address: 'grpc-bitsong-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'bitsong.stakesystems.io:2083',
          provider: 'stake.systems'
        },
        {
          address: 'https://bitsong-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/bitsong',
        tx_page: 'https://ezstaking.tools/bitsong/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/bitsong',
        tx_page: 'https://ping.pub/bitsong/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/bitsong',
        tx_page: 'https://www.mintscan.io/bitsong/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/bitsong/account/${accountAddress}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explorebitsong.com',
        tx_page: 'https://explorebitsong.com/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bitsong',
        tx_page: 'https://atomscan.com/bitsong/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bostrom',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'bostrom',
    chain_id: 'bostrom',
    bech32_prefix: 'bostrom',
    daemon_name: 'cyber',
    node_home: '$HOME/.cyber',
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/cybercongress/go-cyber',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://cloudflare-ipfs.com/ipfs/QmYubyVNfghD4xCrTFj26zBwrF9s5GJhi1TmxvrwmJCipr'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd0518ce9881a4b0c5872e5e9b7c4ea8d760dad3f',
          address: '85.10.207.173:26656',
          provider: 'cybercongress'
        }
      ],
      persistent_peers: [
        {
          id: '5d542c0eb40ae48dc2cac0c140aedb605ded77dc',
          address: '195.201.105.229:26656'
        },
        {
          id: 'c72de1e20beed51b779d89b1cf08d8146016eec4',
          address: '185.186.208.37:26656'
        },
        {
          id: '4c130ed1c58f6d6be981c59a748511e581969c51',
          address: '93.180.175.201:36656'
        },
        {
          id: 'df79a86dc236b8dff250c402e95cd6853e8ad7c4',
          address: '46.166.165.4:26656'
        },
        {
          id: '39a20a7d84c6e91c6638f5a685a13f655e050ee0',
          address: '176.37.214.146:26656'
        },
        {
          id: '77d27615009fc703ece46901792cc8750cccd0de',
          address: '185.230.90.71:26656'
        },
        {
          id: 'dd22cffccafaece970cfa9e7eb3c8468f6fa1c84',
          address: '46.166.165.14:26656'
        },
        {
          id: '5e8522bef5ceca507e05aa0d5f67f37a70222c73',
          address: '185.230.90.202:26656'
        },
        {
          id: '55937c36959ea3984cc6e6ebd3354d73bbbdbcda',
          address: '95.165.24.115:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.bostrom.cybernode.ai',
          provider: 'cybercongress'
        },
        {
          address: 'https://rpc.cyber.posthuman.digital',
          provider: 'posthuman'
        },
        {
          address: 'https://rpc-cyber-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd.bostrom.cybernode.ai',
          provider: 'cybercongress'
        },
        {
          address: 'https://lcd.cyber.posthuman.digital',
          provider: 'posthuman'
        },
        {
          address: 'https://api-cyber-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-cyber-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'cyb',
        url: 'https://cyb.ai/',
        tx_page: 'https://cyb.ai/network/bostrom/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/bostrom',
        tx_page: 'https://ping.pub/bostrom/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bostrom',
        tx_page: 'https://atomscan.com/bostrom/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'canto',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Canto',
    chain_id: 'canto_7700-1',
    bech32_prefix: 'canto',
    node_home: '$HOME/.cantod',
    daemon_name: 'cantod',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'acanto',
          fixed_min_gas_price: 0,
          low_gas_price: 10000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'acanto'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Canto-Network/Canto',
      recommended_version: 'v2.0.0',
      compatible_versions: ['v2.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/Canto-Network/Canto/genesis/Networks/Mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '9361d2cfb283da656b14eaf27e64d96cb86706f0',
          address: '167.71.170.71:26656',
          provider: 'Plex'
        },
        {
          id: '0830aa240e139fba099d1c2e831be84ecb29b73f',
          address: '43.205.108.200:26656',
          provider: 'Unknown'
        },
        {
          id: 'beb82dcef7adcc3f8bc4173fa57bd310f6a6a55a',
          address: '138.197.134.149:26656',
          provider: 'Unknown'
        },
        {
          id: 'baee0ce941a956e61c1e06574b75f390ac14881d',
          address: '143.110.236.188:26656',
          provider: 'Unknown'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15556',
          provider: 'Polkachu'
        },
        {
          id: '706e81c8c99e5d0cf37432df5f972818339f19b5',
          address: '34.122.124.28:26656',
          provider: 'Unknown'
        }
      ],
      persistent_peers: [
        {
          id: '9361d2cfb283da656b14eaf27e64d96cb86706f0',
          address: '167.71.170.71:26656',
          provider: 'Plex'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://164.90.154.41:26657',
          provider: 'Canto'
        },
        {
          address: 'https://rpc.canto.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://canto-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.canto.silentvalidator.com/',
          provider: 'silent'
        }
      ],
      rest: [
        {
          address: 'http://164.90.154.41:1317',
          provider: 'Canto'
        },
        {
          address: 'https://api.canto.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://canto-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.canto.silentvalidator.com/',
          provider: 'silent'
        }
      ],
      grpc: [
        {
          address: 'canto-grpc.polkachu.com:15590',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.canto.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc.canto.silentvalidator.com/',
          provider: 'silent'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://canto.neobase.one/',
          provider: 'NeoBase'
        },
        {
          address: 'https://canto.evm.chandrastation.com',
          provider: 'Chandra Station'
        },
        {
          address: 'https://canto.slingshot.finance',
          provider: 'Slingshot'
        },
        {
          address: 'https://jsonrpc.canto.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://evm-rpc.canto.silentvalidator.com/',
          provider: 'silent'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://cosmos.explorer.canto.io',
        tx_page: 'https://cosmos.explorer.canto.io/transactions/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://https://evm.explorer.canto.io/',
        tx_page: 'https://evm.explorer.canto.io/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://cosmos-explorers.neobase.one/canto',
        tx_page: 'https://cosmos-explorers.neobase.one/canto/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'carbon',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Carbon',
    chain_id: 'carbon-1',
    bech32_prefix: 'swth',
    daemon_name: 'carbond',
    node_home: '$HOME/.carbond',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'swth',
          fixed_min_gas_price: 0,
          low_gas_price: 769.23077,
          average_gas_price: 769.23077,
          high_gas_price: 769.230774
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'swth'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Switcheo/carbon-bootstrap',
      recommended_version: 'v2.15.6',
      compatible_versions: ['v2.15.6'],
      binaries: {
        'linux/amd64':
          'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.15.6/carbond2.15.6-mainnet.linux-amd64.tar.gz',
        'linux/arm64':
          'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.15.6/carbond2.15.6-mainnet.linux-arm64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd93ed6a1f43dd0904dc5e2ab8680d4049b057b17',
          address: '13.215.17.91:26656',
          provider: 'switcheo-labs'
        },
        {
          id: '70581c625fc1933bc273ca7a8d5e9ded3d1bcc97',
          address: '13.213.113.113:26656',
          provider: 'switcheo-labs'
        },
        {
          id: 'e3f02a9f3ca22724b3a67bba9183113645c9c7d9',
          address: '54.179.11.177:26656',
          provider: 'switcheo-labs'
        }
      ],
      persistent_peers: [
        {
          id: 'b638cc8fc5b3d7867281081efce15e5a989339ac',
          address: '188.166.191.195:26656',
          provider: 'intsol'
        },
        {
          id: 'aa238fc5a6b3f2a305a4ffb56a636ce14adce371',
          address: 'alice.peers.carbon.bh.rocks:26656',
          provider: 'BlockHunters'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://tm-api.carbon.network',
          provider: 'switcheo-labs'
        },
        {
          address: 'https://rpc.carbon.bh.rocks',
          provider: 'BlockHunters'
        }
      ],
      rest: [
        {
          address: 'https://api.carbon.network',
          provider: 'switcheo-labs'
        },
        {
          address: 'https://rest.carbon.bh.rocks',
          provider: 'BlockHunters'
        }
      ]
    },
    explorers: [
      {
        kind: 'carbonscan',
        url: 'https://scan.carbon.network',
        tx_page: 'https://scan.carbon.network/transaction/${txHash}?net=main'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cerberus',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://cerberus.zone/',
    pretty_name: 'Cerberus',
    chain_id: 'cerberus-chain-1',
    bech32_prefix: 'cerberus',
    daemon_name: 'cerberusd',
    node_home: '$HOME/.cerberus',
    codebase: {
      git_repo: 'https://github.com/cerberus-zone/cerberus',
      recommended_version: 'v3.0.1',
      compatible_versions: ['v3.0.1'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json'
      }
    },
    fees: {
      fee_tokens: [
        {
          denom: 'ucrbrus',
          fixed_min_gas_price: 0
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13856',
          provider: 'Polkachu'
        },
        {
          id: 'd94df4d4a17fa10834bb97853d91b501aa4abc4b',
          address: 'cerberus-seed.panthea.eu:38656',
          provider: 'Panthea EU'
        }
      ],
      persistent_peers: [
        {
          id: 'd8a04beba9fb95c70368b303f701c36b4e3b4a63',
          address: '185.215.165.29:26656'
        },
        {
          id: 'aaa2eba32286074fb575a48e033ac2ba7f4c94e6',
          address: '98.113.93.139:26661'
        },
        {
          id: '89ee9a502d4d84e5632a1f5b17cbedfb0aaae088',
          address: '116.202.133.77:26656'
        },
        {
          id: '1d7be8ba88c4d1d36d94f493b31018b832ecb5be',
          address: '116.202.223.110:26656'
        },
        {
          id: '7bc4a76ea8ada51695bb2797ae24eec011f4bb86',
          address: '194.163.175.85:26656'
        },
        {
          id: '17e1441d760583ab5cf79a93ea01ced685948bf7',
          address: '168.119.110.93:26656'
        },
        {
          id: 'd7f578c4295c7cf05164a2f786601050bf2f2356',
          address: '142.132.202.98:46656',
          provider: 'ecostake'
        },
        {
          id: '21cca2db122c48a11f426799131ef08235d46671',
          address: '148.251.177.45:10656'
        },
        {
          id: 'bae90c7f3aca48e7ae8b3e28dc3b01a2143f068e',
          address: '194.163.169.187:26656'
        },
        {
          id: '2cee125f1f1d852b08ef3530154da2eb54ed72ac',
          address: '66.94.127.8:26656'
        },
        {
          id: '081e114c7452e3b148cc1a796d75f702b60b0219',
          address: '85.237.192.125:26656'
        },
        {
          id: '22e0968f91aba1b3d4d9ad2db2ae47af8cc0a81a',
          address: '34.139.66.39:26656'
        },
        {
          id: 'c346db0db91a940e87e9ae7df28c3d4947672f54',
          address: '65.108.121.239:26656'
        },
        {
          id: '5180ecb20880706a14f99b8982f37a5c23da21ec',
          address: '65.21.235.249:26656'
        },
        {
          id: 'f03e64d46713068da60b096d528053a57e0e5fec',
          address: '157.90.36.33:29563'
        },
        {
          id: 'ab4fe77e992354fb1c384e4eadbc05427446ada7',
          address: 'cerberus-peer.panthea.eu:28656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cerberus.zone:26657/',
          provider: 'Cerberus'
        },
        {
          address: 'https://rpc-cerberus.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://cerberus-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-cerberus-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://cerberus-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://cerberus-rpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://api.cerberus.zone:1317/',
          provider: 'Cerberus'
        },
        {
          address: 'https://rest-cerberus.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-cerberus-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://cerberus-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://cerberus-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://cerberus-api.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      grpc: [
        {
          address: 'grpc-cerberus-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'cerberus-grpc.polkachu.com:13890',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'skynetexplorers',
        url: 'https://skynetexplorers.com/cerberus',
        tx_page: 'https://skynetexplorers.com/cerberus/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/cerberus',
        tx_page: 'https://ping.pub/cerberus/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cerberus',
        tx_page: 'https://www.mintscan.io/cerberus/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/cerberus/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/cerberus',
        tx_page: 'https://atomscan.com/cerberus/transactions/${txHash}'
      },
      {
        kind: 'TC Network',
        url: 'https://explorer.tcnetwork.io/cerberus',
        tx_page: 'https://explorer.tcnetwork.io/cerberus/transaction/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'chain4energy',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://c4e.io/',
    pretty_name: 'Chain4Energy',
    chain_id: 'perun-1',
    bech32_prefix: 'c4e',
    daemon_name: 'c4ed',
    node_home: '$HOME/.c4e-chain',
    key_algos: ['secp256k1'],
    slip44: 4444,
    fees: {
      fee_tokens: [
        {
          denom: 'uc4e',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/chain4energy/c4e-chain',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/chain4energy/c4e-chains/main/perun-1/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '5b62ff6035d9c8143c0ebf4fe05fa0b22d96bb05',
          address: 'rpc.c4e.ppnv.space:13656',
          provider: 'PPNV Service'
        },
        {
          id: '084a5c788c9c61541152192d7dfe055c153af642',
          address: 'node1.c4e.io:26656',
          provider: 'C4E'
        },
        {
          id: '81a3c179ee820d291adebc215d5d1af95b887ec8',
          address: 'node2.c4e.io:26656',
          provider: 'C4E'
        },
        {
          id: '3c6553a3c45477c2a9902e54069bee7109318b9d',
          address: 'node3.c4e.io:26656',
          provider: 'C4E'
        },
        {
          id: '68a611fc1d17612e4de6b1232d04568ea3c20a19',
          address: 'node4.c4e.io:26656',
          provider: 'C4E'
        }
      ],
      seeds: [
        {
          id: '30e98bbcf5bb29ed4e4ff685fa8fa84fa0ddff51',
          address: 'tenderseed.ccvalidators.com:26008',
          provider: 'CryptoCrew'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://rpc.c4e.ppnv.space:13657',
          provider: 'PPNV Service'
        },
        {
          address: 'https://rpc.c4e.io/',
          provider: 'C4E'
        },
        {
          address: 'https://rpc.c4e.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://m-c4e.rpc.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://rpc-c4e.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://rpc-c4e.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://c4e.rpc.bccnodes.com',
          provider: 'BccNodes'
        }
      ],
      rest: [
        {
          address: 'https://api.c4e.ppnv.space',
          provider: 'PPNV Service'
        },
        {
          address: 'https://lcd.c4e.io/',
          provider: 'C4E'
        },
        {
          address: 'https://api-c4e.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://api.c4e.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://m-c4e.api.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://api-c4e.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://c4e.api.bccnodes.com',
          provider: 'BccNodes'
        }
      ],
      grpc: [
        {
          address: 'http://grpc.c4e.ppnv.space:13090',
          provider: 'PPNV Service'
        },
        {
          address: 'https://grpc.c4e.io/',
          provider: 'C4E'
        },
        {
          address: 'https://grpc.c4e.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-c4e.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://grpc-c4e.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://c4e.grpc.bccnodes.com:9090',
          provider: 'BccNodes'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorer',
        url: 'https://explorer.ppnv.space/c4e',
        tx_page: 'https://explorer.ppnv.space/c4e/transactions/${txHash}'
      },
      {
        kind: 'explorer',
        url: 'https://explorer.c4e.io/',
        tx_page: 'https://explorer.c4e.io/transactions/${txHash}'
      },
      {
        kind: 'NodeStake Explorer',
        url: 'https://explorer.nodestake.top/chain4energy',
        tx_page:
          'https://explorer.nodestake.top/chain4energy/transactions/${txHash}'
      },
      {
        kind: 'lesnik | UTSA Explorer',
        url: 'https://exp.utsa.tech/c4e',
        tx_page: 'https://exp.utsa.tech/c4e/tx/${txHash}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/m-c4e',
        tx_page: 'https://exp.nodeist.net/m-c4e/transactions/${txHash}'
      },
      {
        kind: 'BccNodes Explorer',
        url: 'https://explorer.bccnodes.com/chain4energy',
        tx_page:
          'https://explorer.bccnodes.com/chain4energy/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cheqd',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.cheqd.io/',
    pretty_name: 'cheqd',
    chain_id: 'cheqd-mainnet-1',
    bech32_prefix: 'cheqd',
    daemon_name: 'cheqd-noded',
    node_home: '$HOME/.cheqdnode',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ncheq',
          fixed_min_gas_price: 25,
          low_gas_price: 25,
          average_gas_price: 50,
          high_gas_price: 100
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ncheq'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cheqd/cheqd-node',
      recommended_version: 'v0.6.9',
      compatible_versions: ['v0.6.9', 'v0.6.8', 'v0.6.7', 'v0.6.1', 'v0.6.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cheqd/cheqd-node/releases/download/0.6.9/cheqd-noded-0.6.9-Linux-arm64.tar.gz',
        'linux/arm64':
          'https://github.com/cheqd/cheqd-node/releases/download/0.6.9/cheqd-noded-0.6.9-Linux-x86_64.tar.gz'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '258a9bfb822637bfca87daaab6181c10e7fd0910',
          address: 'seed1.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: 'f565ff792b20977face9817df6acb268d41d4092',
          address: 'seed2.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '388947cc7d901c5c06fedc4c26751634564d68e6',
          address: 'seed3.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '9b30307a2a2819790d68c04bb62f5cf4028f447e',
          address: 'seed1.ap.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16156',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'd8676573a3718c05d3d0d07906f3604a9e3a034d',
          address: 'seeds.whispernode.com:16156',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'd1ebb60825e2c29181b499f93493dd440fb87997',
          address: 'sentry1.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '513d334bb044296796939e57b522fef7fd4b9c6c',
          address: 'sentry2.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '9201b408d24941fd342e739f0814aa3eb8ab7577',
          address: 'sentry1.ap.cheqd.net:26656',
          provider: 'cheqd'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cheqd.net',
          provider: 'cheqd'
        },
        {
          address: 'https://cheqd-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes'
        },
        {
          address: 'https://rpc-cheqd-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.cheqd.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://api.cheqd.net',
          provider: 'cheqd'
        },
        {
          address: 'https://cheqd-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes'
        },
        {
          address: 'https://api-cheqd-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.cheqd.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'grpc.cheqd.net:443',
          provider: 'cheqd'
        },
        {
          address: 'https://cheqd-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'grpc-cheqd-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://grpc.cheqd.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explorer.cheqd.io/',
        tx_page: 'https://explorer.cheqd.io/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/cheqd',
        tx_page: 'https://ping.pub/cheqd/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/cheqd',
        tx_page: 'https://atomscan.com/cheqd/transactions/${txHash}',
        account_page: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
      },
      {
        kind: 'ezstaking',
        url: 'https://ezstaking.tools/cheqd',
        tx_page: 'https://ezstaking.tools/cheqd/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://look.chillvalidation.com/cheqd',
        tx_page: 'https://look.chillvalidation.com/cheqd/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.wildsage.io/cheqd',
        tx_page: 'https://ping.wildsage.io/cheqd/tx/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'chihuahua',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://chihuahua.wtf/',
    pretty_name: 'Chihuahua',
    chain_id: 'chihuahua-1',
    bech32_prefix: 'chihuahua',
    daemon_name: 'chihuahuad',
    node_home: '$HOME/.chihuahuad',
    fees: {
      fee_tokens: [
        {
          denom: 'uhuahua',
          fixed_min_gas_price: 0,
          low_gas_price: 1,
          average_gas_price: 5,
          high_gas_price: 10
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uhuahua'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ChihuahuaChain/chihuahua/',
      recommended_version: 'v4.1.0',
      compatible_versions: ['v4.1.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ChihuahuaChain/chihuahua/main/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:12956',
          provider: 'RHINO'
        },
        {
          id: '4936e377b4d4f17048f8961838a5035a4d21240c',
          address: 'chihuahua-seed-01.mercury-nodes.net:29540'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12956',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12956',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '77cbb35d1df17f48a42e9f157f12f55b691e9f5e',
          address: 'seeds.goldenratiostaking.net:1620',
          provider: 'Golden Ratio Staking'
        },
        {
          id: '3c5b1a13f810507b9ef1240372b3cbc9bd90da26',
          address: 'seeds.whispernode.com:12956',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'b140eb36b20f3d201936c4757d5a1dcbf03a42f1',
          address: '216.238.79.138:26656',
          provider: 'artifact'
        },
        {
          id: '19900e1d2b10be9c6672dae7abd1827c8e1aad1e',
          address: '161.97.96.253:26656',
          provider: 'StakeLab'
        },
        {
          id: 'c382a9a0d4c0606d785d2c7c2673a0825f7c53b2',
          address: '88.99.94.120:26656',
          provider: 'Chihuahua'
        },
        {
          id: 'a5dfb048e4ed5c3b7d246aea317ab302426b37a1',
          address: '137.184.250.180:26656',
          provider: 'CHILL'
        },
        {
          id: '3bad0326026ca4e29c64c8d206c90a968f38edbe',
          address: '128.199.165.78:26656',
          provider: 'KingNodes'
        },
        {
          id: '89b576c3eb72a4f0c66dc0899bec7c21552ea2a5',
          address: '23.88.7.73:29538',
          provider: 'Mercury'
        },
        {
          id: '38547b7b6868f93af1664d9ab0e718949b8853ec',
          address: '54.184.20.240:30758',
          provider: '0base.vc'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.chihuahua.wtf/',
          provider: 'Chihuahua'
        },
        {
          address: 'https://rpc-chihuahua.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://chihuahua-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-chihuahua-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://chihuahua-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.chihuahua.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://rpc.huahua.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://chihuahua-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-chihuahua.pupmos.network/',
          provider: 'PUPMØS'
        }
      ],
      rest: [
        {
          address: 'https://api.chihuahua.wtf/',
          provider: 'Chihuahua'
        },
        {
          address: 'https://rest-chihuahua.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-chihuahua-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://chihuahua-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://chihuahua-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.huahua.bh.rocks/',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://chihuahua-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://api-chihuahua.pupmos.network/',
          provider: 'PUPMØS'
        }
      ],
      grpc: [
        {
          address: 'grpc-chihuahua-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'chihuahua-grpc.polkachu.com:12990',
          provider: 'Polkachu'
        },
        {
          address: 'https://chihuahua-grpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'grpc.huahua.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/chihuahua',
        tx_page: 'https://ping.pub/chihuahua/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://mintscan.io/chihuahua',
        tx_page: 'https://mintscan.io/chihuahua/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/chihuahua/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/chihuahua',
        tx_page: 'https://atomscan.com/chihuahua/transactions/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'chronicnetwork',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Chronic Chain',
    chain_id: 'morocco-1',
    bech32_prefix: 'chronic',
    daemon_name: 'chtd',
    node_home: '$HOME/.cht',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ucgas',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ChronicNetwork/cht',
      recommended_version: 'v1.1.0',
      compatible_versions: ['v1.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ChronicNetwork/net/main/mainnet/v1.1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ba4c7434bdb00f49b26450242713d52e7c6c8f73',
          address: '147.182.180.205:26656',
          provider: 'Third Party'
        }
      ],
      persistent_peers: [
        {
          id: '9dd99f5aaebac6027e842a5678c2ad2663942506',
          address: '185.16.39.128:26456',
          provider: 'StingRay'
        },
        {
          id: '694ddedde37bb211c827834e27e39d4c85f36f5f',
          address: '46.4.119.90:46656',
          provider: 'Chill Validation'
        },
        {
          id: '31cc2cd1735ff7b51bb44dada4d984741208fc39',
          address: '65.21.88.252:29656',
          provider: 'hdmiidmh'
        },
        {
          id: '998340bc75690a0479fa028f5bdf275b829b9f1a',
          address: '65.21.132.226:28656',
          provider: 'Blockscope.net'
        },
        {
          id: '4e9a1be76e5f2bf6c34748b85aed0cedca892cc8',
          address: '143.244.182.230:26656',
          provider: 'xiti'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        },
        {
          address: 'https://rpc-chronic.zenchainlabs.io/',
          provider: 'ZenChainLabs'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        }
      ],
      rest: [
        {
          address: 'https://api.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        },
        {
          address: 'https://api-chronic.zenchainlabs.io/',
          provider: 'ZenChainLabs'
        }
      ]
    },
    explorers: [
      {
        kind: 'skynetexplorers',
        url: 'https://www.skynetexplorers.com/chronic-token',
        tx_page: ''
      },
      {
        kind: 'Zenscan.io',
        url: 'https://www.chronic.zenscan.io',
        tx_page: ''
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'comdex',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://comdex.one/',
    pretty_name: 'Comdex',
    chain_id: 'comdex-1',
    bech32_prefix: 'comdex',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ucmdx',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/comdex-official/comdex',
      recommended_version: 'v7.0.0',
      compatible_versions: ['v7.0.0'],
      genesis: {
        genesis_url:
          'https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json'
      }
    },
    daemon_name: 'comdex',
    node_home: '$HOME/.comdex',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: 'aef35f45db2d9f5590baa088c27883ac3d5e0b33',
          address: '3.108.102.92:26656'
        },
        {
          id: '7ca14a1d156299999eba9c394ca060368022d52f',
          address: '54.194.178.110:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13156',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:13156',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'comdex.mainnet.seed.autostake.net:26776',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '6596d143fd128b2394b27cd7846bda099ca5a193',
          address: 'seeds.goldenratiostaking.net:1621',
          provider: 'Golden Ratio Staking'
        },
        {
          id: '243d93ff2f663860f118fa32e2122fbba7f00a92',
          address: 'seeds.whispernode.com:13156',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'f74518ad134630da8d2405570f6a3639954c985f',
          address: '65.0.173.217:26656'
        },
        {
          id: 'd478882a80674fa10a32da63cc20cae13e3a2a57',
          address: '43.204.0.243:26656'
        },
        {
          id: '61d743ea796ad1e1ff838c9e84adb38dfffd1d9d',
          address: '15.235.9.222:26656'
        },
        {
          id: 'b8468f64788a17dbf34a891d9cd29d54b2b6485d',
          address: '194.163.178.25:26656'
        },
        {
          id: 'd8b74791ee56f1b345d822f62bd9bc969668d8df',
          address: '194.163.128.55:36656'
        },
        {
          id: '81444353d70bab79742b8da447a9564583ed3d6a',
          address: '164.68.105.248:26656'
        },
        {
          id: '5b1ceb8110da4e90c38c794d574eb9418a7574d6',
          address: '43.254.41.56:26656'
        },
        {
          id: '98b4522a541a69007d87141184f146a8f04be5b9',
          address: '40.112.90.170:26656'
        },
        {
          id: '9a59b6dc59903d036dd476de26e8d2b9f1acf466',
          address: '195.201.195.111:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'comdex.mainnet.peer.autostake.net:26776',
          provider: 'AutoStake 🛡️ Slash Protecteds'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://api.comdex.audit.one/rpc',
          provider: 'audit'
        },
        {
          address: 'https://rpc.comdex.one',
          provider: 'comdex'
        },
        {
          address: 'http://comdex.node.vitwit.com:26657/',
          provider: 'vitwit'
        },
        {
          address: 'https://rpc-comdex.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://comdex-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-comdex-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.comdex.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://comdex-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-comdex.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        }
      ],
      rest: [
        {
          address: 'https://api.comdex.audit.one/rest',
          provider: 'audit'
        },
        {
          address: 'https://rest.comdex.one',
          provider: 'comdex'
        },
        {
          address: 'http://comdex.node.vitwit.com:1317/',
          provider: 'vitwit'
        },
        {
          address: 'https://api-comdex.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://api-comdex-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.comdex.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://comdex-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://comdex-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://comdex.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-comdex-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://comdex.grpcui.chaintools.host/',
          provider: 'ChainTools'
        },
        {
          address: 'comdex-grpc.polkachu.com:13190',
          provider: 'Polkachu'
        },
        {
          address: 'https://comdex-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/comdex',
        tx_page: 'https://ezstaking.tools/comdex/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/comdex',
        tx_page: 'https://www.mintscan.io/comdex/txs/${txHash}',
        account_page: 'https://www.mintscan.io/comdex/account/${accountAddress}'
      },
      {
        kind: 'aneka',
        url: 'https://comdex.aneka.io/',
        tx_page: 'https://comdex.aneka.io/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/comdex',
        tx_page: 'https://ping.pub/comdex/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/comdex',
        tx_page: 'https://atomscan.com/comdex/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'commercionetwork',
    chain_id: 'commercio-3',
    pretty_name: 'Commercio.network',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'did:com:',
    daemon_name: 'commercionetworkd',
    node_home: '$HOME/.commercionetworkd',
    key_algos: ['secp256k1'],
    slip44: 701,
    fees: {
      fee_tokens: [
        {
          denom: 'ucommercio'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/commercionetwork/commercionetwork',
      recommended_version: 'v4.0.0',
      compatible_versions: ['v4.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/commercionetwork/chains/master/commercio-3/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '8d3ac30a774245019f7b94d7a0713fd8caccaa03',
          address: 'seed-01.commercio.network:26656'
        },
        {
          id: '68ccfc9a1574923e344993d49253d8169f592f9e',
          address: 'seed-02.commercio.network:26656'
        }
      ],
      persistent_peers: [
        {
          id: '3f26a7d3269e352574e760d4b08d045aa40ebbf2',
          address: 'persistent-01.commercio.network:26656'
        },
        {
          id: '15767f4961b501eb67e740aa60c1608bf65679f3',
          address: 'persistent-02.commercio.network:26656'
        },
        {
          id: '01f615a56a7ba14d39e4eaf2bfd00a885cc4e629',
          address: 'persistent-03.commercio.network:26656'
        },
        {
          id: 'd6e07b5f0a69bd4d6f4e6e931f00fbcb992a8654',
          address: 'persistent-04.commercio.network:26656'
        },
        {
          id: '542a55fff599ea07e2b4841febff4a78cf8db2aa',
          address: 'persistent-05.commercio.network:26656'
        },
        {
          id: 'e2bd5ac83f0d2fde72571568b9a4203f7e76067d',
          address: '64.225.95.231:26656'
        },
        {
          id: 'e84b1b8cdb6563170466912f082829c2e4d28ab1',
          address: '209.250.247.45:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-mainnet.commercio.network'
        }
      ],
      rest: [
        {
          address: 'https://lcd-mainnet.commercio.network'
        }
      ]
    },
    explorers: [
      {
        kind: 'almerico',
        url: 'https://mainnet.commercio.network',
        tx_page:
          'https://mainnet.commercio.network/transactions/detail/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cosmoshub',
    chain_id: 'cosmoshub-4',
    website: 'https://cosmos.network/',
    pretty_name: 'Cosmos Hub',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'cosmos',
    daemon_name: 'gaiad',
    node_home: '$HOME/.gaia',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uatom',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cosmos/gaia',
      recommended_version: 'v7.1.0',
      compatible_versions: ['v7.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.1.0/gaiad-v7.1.0-linux-amd64',
        'linux/arm64':
          'https://github.com/cosmos/gaia/releases/download/v7.1.0/gaiad-v7.1.0-linux-arm64',
        'darwin/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.1.0/gaiad-v7.1.0-darwin-amd64',
        'windows/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.1.0/gaiad-v7.1.0-windows-amd64.exe'
      },
      genesis: {
        genesis_url:
          'https://github.com/cosmos/mainnet/raw/master/genesis/genesis.cosmoshub-4.json.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'bf8328b66dceb4987e5cd94430af66045e59899f',
          address: 'public-seed.cosmos.vitwit.com:26656',
          provider: 'vitwit'
        },
        {
          id: 'cfd785a4224c7940e9a10f6c1ab24c343e923bec',
          address: '164.68.107.188:26656'
        },
        {
          id: 'd72b3011ed46d783e369fdf8ae2055b99a1e5074',
          address: '173.249.50.25:26656'
        },
        {
          id: 'ba3bacc714817218562f743178228f23678b2873',
          address: 'public-seed-node.cosmoshub.certus.one:26656',
          provider: 'certusone'
        },
        {
          id: '3c7cad4154967a294b3ba1cc752e40e8779640ad',
          address: '84.201.128.115:26656'
        },
        {
          id: '366ac852255c3ac8de17e11ae9ec814b8c68bddb',
          address: '51.15.94.196:26656'
        },
        {
          id: 'bcef90de8a83673c336bf3b3a352445b3a3a1f08',
          address: 'cosmos-seed.sunshinevalidation.io:31038',
          provider: 'sunshine-validation'
        },
        {
          id: '3b67739570f921cc5e0db4b3efe488ce184155a9',
          address: 'seeds.pupmos.network:2000',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14956',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:14956',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '57a5297537b9b6ef8b105c08a8ad3f6ac452c423',
          address: 'seeds.goldenratiostaking.net:1618',
          provider: 'Golden Ratio Staking'
        },
        {
          id: '7aa410eb8f699c366b1f1e2904ba6b0d1cac379b',
          address: 'seeds.whispernode.com:14956',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'ee27245d88c632a556cf72cc7f3587380c09b469',
          address: '45.79.249.253:26656'
        },
        {
          id: '538ebe0086f0f5e9ca922dae0462cc87e22f0a50',
          address: '34.122.34.67:26656'
        },
        {
          id: 'd3209b9f88eec64f10555a11ecbf797bb0fa29f4',
          address: '34.125.169.233:26656'
        },
        {
          id: 'bdc2c3d410ca7731411b7e46a252012323fbbf37',
          address: '34.83.209.166:26656'
        },
        {
          id: '585794737e6b318957088e645e17c0669f3b11fc',
          address: '54.160.123.34:26656'
        },
        {
          id: '11dfe200894f38e411beca77928e9dd118e66813',
          address: '94.130.98.157:26656'
        },
        {
          id: '5b4ed476e01c49b23851258d867cc0cfc0c10e58',
          address: '206.189.4.227:26656'
        },
        {
          id: '654f47a762c8f9257aef4a44c1fb5014916d8b20',
          address: '99.79.60.15:26656'
        },
        {
          id: '366ac852255c3ac8de17e11ae9ec814b8c68bddb',
          address: '51.15.94.196:26656'
        },
        {
          id: 'd6318b3bd51a5e2b8ed08f2e520d50289ed32bf1',
          address: '52.79.43.100:26656'
        },
        {
          id: '1bfda3d59e70290a3dada9bb809dd954371850d3',
          address: '54.180.225.240:26656'
        },
        {
          id: '6ee94c2093505e8790442c054e6e1e0211d36583',
          address: '44.239.140.195:26656'
        },
        {
          id: 'ec779a2741da6dd2ccdaa6dfc0bebb10e595dfa4',
          address: '50.18.113.67:26656'
        },
        {
          id: 'cfd785a4224c7940e9a10f6c1ab24c343e923bec',
          address: '164.68.107.188:26656'
        },
        {
          id: 'd72b3011ed46d783e369fdf8ae2055b99a1e5074',
          address: '173.249.50.25:26656'
        },
        {
          id: '047f723806ee702b211e7227f89eacd829aabd86',
          address: '52.9.212.125:26656'
        },
        {
          id: 'b0e746acb6fbed7a0311fe21cfb2ee94581ca3bc',
          address: '51.79.21.187:26656'
        },
        {
          id: '82772547c4575c18dfe6e75aafe521cf7d4dc8de',
          address: '142.93.157.186:26656'
        },
        {
          id: '3c7cad4154967a294b3ba1cc752e40e8779640ad',
          address: '84.201.128.115:26656'
        },
        {
          id: 'f122129f53b7c584df6cee77716dcc636d5c5e18',
          address: '167.172.59.196:26656'
        },
        {
          id: '241b17dba97a2ed3c3747d12781fb86c9706e2d4',
          address: '95.179.136.131:26656'
        },
        {
          id: 'f1b16c603f3a0e59f0ce5179dc80f549a7ecd0e2',
          address: 'sentries.us-east1.iqext.net:26656'
        },
        {
          id: '64bd8eaf08b05f17ccd88425f80b59ab48934004',
          address: '157.90.18.35:26656',
          provider: 'in3s.com'
        },
        {
          id: '1da54d20c7339713f1d6d28dd2117087dd33d0ca',
          address: 'cosmos-seed.icycro.org:26656',
          provider: 'IcyCRO 🧊'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-cosmoshub.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://cosmos-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://rpc-cosmoshub.whispernode.com',
          provider: ' WhisperNode🤐'
        },
        {
          address: 'https://cosmoshub.validator.network/',
          provider: 'validatornetwork'
        },
        {
          address: 'https://cosmoshub-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.cosmoshub.strange.love',
          provider: 'strangelove-ventures'
        },
        {
          address: 'https://rpc.cosmos.network:443',
          provider: 'tendermint-inc'
        },
        {
          address: 'https://rpc-cosmoshub.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://rpc-cosmoshub.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://cosmos-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://cosmoshub.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rpc-cosmoshub.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://rpc-cosmoshub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.cosmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://rpc.cosmos.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://atom-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-cosmoshub.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://rpc.cosmos.dragonstake.io',
          provider: 'DragonStake'
        },
        {
          address: 'https://cosmoshub.rpc.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://cosmos-rpc.icycro.org',
          provider: 'IcyCRO 🧊'
        },
        {
          address: 'https://rpc.cosmos.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://lcd-cosmoshub.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://cosmos-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://lcd-cosmoshub.whispernode.com',
          provider: ' WhisperNode🤐'
        },
        {
          address: 'https://cosmoshub-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rest-cosmoshub.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-cosmoshub.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://api-cosmoshub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://cosmos-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://cosmoshub.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://cosmos-api.cyphercore.io',
          provider: 'Cypher Core'
        },
        {
          address: 'https://api.cosmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://api.cosmos.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://atom-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://lcd.cosmos.dragonstake.io',
          provider: 'DragonStake'
        },
        {
          address: 'https://rest-cosmoshub.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://rest-cosmoshub.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://cosmoshub.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://api.cosmos.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      grpc: [
        {
          address: 'grpc-cosmoshub.blockapsis.com:429',
          provider: 'chainapsis'
        },
        {
          address: 'cosmoshub.strange.love:9090',
          provider: 'strangelove'
        },
        {
          address: 'https://cosmoshub-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'grpc-cosmoshub-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'cosmos-grpc.polkachu.com:14990',
          provider: 'Polkachu'
        },
        {
          address: 'cosmoshub.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://grpc.cosmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://grpc.cosmos.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://grpc.cosmos.dragonstake.io',
          provider: 'DragonStake'
        },
        {
          address: 'cosmoshub.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        },
        {
          address: 'grpc.cosmos.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/cosmoshub',
        tx_page: 'https://ezstaking.tools/cosmoshub/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cosmos',
        tx_page: 'https://www.mintscan.io/cosmos/txs/${txHash}',
        account_page: 'https://www.mintscan.io/cosmos/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/cosmos',
        tx_page: 'https://ping.pub/cosmos/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://cosmos.bigdipper.live/',
        tx_page: 'https://cosmos.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com',
        tx_page: 'https://atomscan.com/transactions/${txHash}'
      },
      {
        kind: 'unichain',
        url: 'https://unicha.in/cosmos',
        tx_page: 'https://unicha.in/cosmos/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'crescent',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Crescent',
    chain_id: 'crescent-1',
    bech32_prefix: 'cre',
    daemon_name: 'crescentd',
    node_home: '$HOME/.crescent',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ucre',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crescent-network/crescent',
      recommended_version: 'v2.1.1',
      compatible_versions: ['v2.1.0', 'v2.1.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-linux-amd64',
        'darwin/amd64':
          'https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-darwin-amd64'
      },
      genesis: {
        genesis_url:
          'https://github.com/crescent-network/launch/raw/main/mainnet/crescent-1/genesis.json.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '929f22a7b04ff438da9edcfebd8089908239de44',
          address: '18.180.232.184:26656',
          provider: 'crescent'
        },
        {
          id: 'c312d41ef52b7c890674e808ef28c57a7746057c',
          address: 'seeds.pupmos.network:2003',
          provider: 'PUPMØS'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'crescent.mainnet.seed.autostake.net:26816',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: 'b34115ba926eb12059ca0ade4d1013cac2f8d289',
          address: 'crescent-mainnet-01.01node.com:26656',
          provider: '01node'
        },
        {
          id: '06415494b86316c55245d162da065c3c0fee83fc',
          address: '172.104.108.21:26656',
          provider: 'Forbole'
        },
        {
          id: '3bcffbcb11e96edc84c04a5628639f5ed94b9db2',
          address: '128.0.51.5:26656',
          provider: 'Dokia-capital'
        },
        {
          id: '68787e8412ab97d99af7595c46514b9ab4b3df45',
          address: '54.250.202.17:26656',
          provider: 'DSRV'
        },
        {
          id: '3b468af82b8ffa049b3e1f67dc4615a31ec8f01e',
          address: '50.21.167.131:26656',
          provider: 'Simply Staking'
        },
        {
          id: 'dc7c0e331165ba047cc6b304ce467ee25518e0f9',
          address: '34.85.89.74:26656',
          provider: 'Strangelove'
        },
        {
          id: 'b840926fb6a2bd04fc70e501002f9286655c9179',
          address: '52.199.91.143:30732',
          provider: '0base.vc'
        },
        {
          id: 'd7556e41ba2f333379f6d87b1af3cce2ca545f79',
          address: '34.88.102.246:26656',
          provider: 'P2P validator'
        },
        {
          id: '4293ce6b47ee2603236437ab44dc499519c71e62',
          address: '45.76.97.48:26656',
          provider: 'Nodes.Guru'
        },
        {
          id: '24be64cd648958d9f685f95516cb3b248537c386',
          address: '52.197.140.210:26656',
          provider: 'Cosmostation'
        },
        {
          id: '0ed5ed53ec3542202d02d0d47ac04a2823188fc2',
          address: '52.194.172.170:26656',
          provider: 'Provalidator'
        },
        {
          id: 'c64f03deb3127d41401ef57d9762c64673f225f3',
          address: '172.105.221.43:46656',
          provider: 'in3s.com'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14556',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'crescent.mainnet.peer.autostake.net:26816',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet.crescent.network:26657',
          provider: 'crescent'
        },
        {
          address: 'https://crescent-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-crescent.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://crescent.rpc.stakin-nodes.com',
          provider: 'Stakin'
        }
      ],
      rest: [
        {
          address: 'https://mainnet.crescent.network:1317',
          provider: 'crescent'
        },
        {
          address: 'https://api-crescent.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://crescent-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://crescent.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://crescent.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'mainnet.crescent.network:9090',
          provider: 'crescent'
        },
        {
          address: 'crescent-grpc.polkachu.com:14590',
          provider: 'Polkachu'
        },
        {
          address: 'crescent.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/crescent',
        tx_page: 'https://www.mintscan.io/crescent/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/crescent/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/crescent',
        tx_page: 'https://ping.pub/crescent/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://crescent.explorers.guru',
        tx_page: 'https://crescent.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/crescent',
        tx_page: 'https://atomscan.com/crescent/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cronos',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://cronos.org',
    pretty_name: 'Cronos',
    chain_id: 'cronosmainnet_25-1',
    bech32_prefix: 'crc',
    daemon_name: 'cronosd',
    node_home: '$HOME/.cronos',
    key_algos: ['ethsecp256k1'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'basecro'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crypto-org-chain/cronos',
      recommended_version: 'v0.8.3',
      compatible_versions: ['v0.7.0', 'v0.7.1', 'v0.8.0', 'v0.8.1', 'v0.8.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.8.3/cronos_0.8.3_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.8.3/cronos_0.8.3_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.8.3/cronos_0.8.3_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.8.3/cronos_0.8.3_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.8.3/cronos_0.8.3_Windows_x86_64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
          address: 'cronos-seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '3032073adc06d710dd512240281637c1bd0c8a7b',
          address: 'cronos-seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
          address: 'cronos-seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
          address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
          provider: 'Blockdaemon.com'
        },
        {
          id: 'abedfe94dd5731e9750e045ca8d8e40aa6d3c60b',
          address: 'seed.cronos.jerrychong.com:26656',
          provider: "Jerry's Pool"
        }
      ],
      persistent_peers: [
        {
          id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
          address: 'cronos-seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '3032073adc06d710dd512240281637c1bd0c8a7b',
          address: 'cronos-seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
          address: 'cronos-seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
          address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
          provider: 'Blockdaemon.com'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      rest: [
        {
          address: 'https://rest.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      grpc: [
        {
          address: 'http://grpc.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm.cronos.org/',
          provider: 'crypto.org'
        }
      ]
    },
    explorers: [
      {
        kind: 'cronoscan',
        url: 'https://cronoscan.com',
        tx_page: 'https://cronoscan.com/tx/${txHash}'
      },
      {
        kind: 'crypto.org',
        url: 'https://cronos.org/explorer',
        tx_page: 'https://cronos.org/explorer/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cryptoorgchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Crypto.org Chain',
    chain_id: 'crypto-org-chain-mainnet-1',
    bech32_prefix: 'cro',
    daemon_name: 'chain-maind',
    node_home: '$HOME/.chain-maind',
    slip44: 394,
    fees: {
      fee_tokens: [
        {
          denom: 'basecro'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crypto-org-chain/chain-main',
      recommended_version: 'v3.3.3',
      compatible_versions: ['v3.3.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Windows_x86_64.zip'
      },
      genesis: {
        genesis_url:
          'https://github.com/crypto-org-chain/mainnet/raw/main/crypto-org-chain-mainnet-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
          address: 'seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
          address: 'seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '2c55809558a4e491e9995962e10c026eb9014655',
          address: 'seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702',
          address:
            'p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6',
          address:
            'p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '494d860a2869b90c458b07d4da890539272785c9',
          address:
            'p2p.fabc23d9-e0a1-4ced-8cd7-eb3efd6d9ef3.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'dc2540dabadb8302da988c95a3c872191061aed2',
          address:
            'p2p.7d1b53c0-b86b-44c8-8c02-e3b0e88a4bf7.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '33b15c14f54f71a4a923ac264761eb3209784cf2',
          address:
            'p2p.0d20d4b3-6890-4f00-b9f3-596ad3df6533.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'd2862ef8f86f9976daa0c6f59455b2b1452dc53b',
          address:
            'p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        }
      ],
      persistent_peers: [
        {
          id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
          address: 'seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
          address: 'seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '2c55809558a4e491e9995962e10c026eb9014655',
          address: 'seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702',
          address:
            'p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6',
          address:
            'p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'd2862ef8f86f9976daa0c6f59455b2b1452dc53b',
          address:
            'p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet.crypto.org/',
          provider: 'crypto.org'
        },
        {
          address: 'https://rpc-crypto-org.keplr.app/',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-cryptoorgchain.ecostake.com',
          provider: 'ecostake'
        }
      ],
      rest: [
        {
          address: 'https://mainnet.crypto.org/',
          provider: 'crypto.org'
        },
        {
          address: 'https://lcd-crypto-org.keplr.app/',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-cryptoorgchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rest-cryptoorgchain.ecostake.com',
          provider: 'ecostake'
        }
      ],
      grpc: [
        {
          address: 'grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/crypto-org',
        tx_page: 'https://www.mintscan.io/crypto-org/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/crypto-org/account/${accountAddress}'
      },
      {
        kind: 'crypto.org',
        url: 'https://crypto.org/explorer',
        tx_page: 'https://crypto.org/explorer/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/crypto-com-chain',
        tx_page: 'https://ping.pub/crypto-com-chain/tx/${txHash}'
      },
      {
        kind: 'yummy-explorer',
        url: 'https://explorer.yummy.capital',
        tx_page: 'https://explorer.yummy.capital/txs/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cudos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Cudos',
    chain_id: 'cudos-1',
    bech32_prefix: 'cudos',
    daemon_name: 'cudos-noded',
    key_algos: ['secp256k1'],
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/CudoVentures/cudos-node',
      recommended_version: 'v1.0.1',
      compatible_versions: ['v1.0.1'],
      genesis: {
        genesis_url:
          'https://github.com/CudoVentures/cudos-builders/blob/v1.0.0/docker/config/genesis.mainnet.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ff3f0f7b1eecc6844e6512428ef4c7a9448452a8',
          address: 'cluster-1-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '6d9beb4d44a530a4a10ebe78ed7717f6083d0c4b',
          address: 'cluster-2-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'e0f3bcc574ef66ae4561fad0772a4fd1959969af',
          address: 'cluster-3-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        }
      ],
      persistent_peers: [
        {
          id: 'f196d7cc811a5ab99e4c5dd5c7f3c0135509d1c4',
          address: 'cluster-1-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '2cc0a12ff1038509b2ed64719fcddfdded9a04ad',
          address: 'cluster-2-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'ab1ec4fb29afc9c0f5a04b7cbd1220b8b30ffea4',
          address: 'cluster-3-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '2958b15e9102cb556cc0f1f1bbbfdfc922a16069',
          address: 'mainnet-full-node-01.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'eb14f9142ad313297653f84754b1caf60efe75ac',
          address: 'mainnet-full-node-02.hosts.cudos.org:26656',
          provider: 'cudo'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://mainnet-full-node-01.hosts.cudos.org:26657',
          provider: 'cudo'
        },
        {
          address: 'https://mainnet-full-node-02.hosts.cudos.org:36657',
          provider: 'cudo'
        }
      ],
      rest: [
        {
          address: 'http://mainnet-full-node-01.hosts.cudos.org:1317',
          provider: 'cudo'
        },
        {
          address: 'https://mainnet-full-node-02.hosts.cudos.org:31317',
          provider: 'cudo'
        }
      ],
      grpc: [
        {
          address: 'http://mainnet-full-node-01.hosts.cudos.org:9090',
          provider: 'cudo'
        },
        {
          address: 'https://mainnet-full-node-02.hosts.cudos.org:39090',
          provider: 'cudo'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explorer.cudos.org/',
        tx_page: 'https://explorer.cudos.org/transactions/${txHash}',
        account_page: 'https://explorer.cudos.org/accounts/${accountAddress}'
      },
      {
        kind: 'cudos-dashboard',
        url: 'https://dashboard.cudos.org/',
        tx_page: 'https://explorer.cudos.org/transactions/${txHash}',
        account_page: 'https://explorer.cudos.org/accounts/${accountAddress}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cudos',
        tx_page: 'https://www.mintscan.io/cudos/txs/${txHash}',
        account_page: 'https://www.mintscan.io/cudos/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/cudos',
        tx_page: 'https://atomscan.com/cudos/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'decentr',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Decentr',
    chain_id: 'mainnet-3',
    bech32_prefix: 'decentr',
    daemon_name: 'decentrd',
    node_home: '$HOME/.decentr',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'udec',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Decentr-net/decentr',
      recommended_version: 'v1.5.7',
      compatible_versions: ['v1.5.7'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/Decentr-net/mainnets/master/3.0/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '7708addcfb9d4ff394b18fbc6c016b4aaa90a10a',
          address: 'ares.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '8a3485f940c3b2b9f0dd979a16ea28de154f14dd',
          address: 'calliope.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '87490fd832f3226ac5d090f6a438d402670881d0',
          address: 'euterpe.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '3261bff0b7c16dcf6b5b8e62dd54faafbfd75415',
          address: 'hera.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'c37f32e202e13b0725515570f794b68573a6f58c',
          address: 'hera.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '5f3cfa2e3d5ed2c2ef699c8593a3d93c902406a9',
          address: 'hermes.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'a529801b5390f56d5c280eaff4ae95b7163e385f',
          address: 'melpomene.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '385129dbe71bceff982204afa11ed7fa0ee39430',
          address: 'poseidon.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '35a934228c32ad8329ac917613a25474cc79bc08',
          address: 'terpsichore.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '0fd62bcd1de6f2e3cfc15852cdde9f3f8a7987e4',
          address: 'thalia.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'bd99693d0dbc855b0367f781fb48bf1ca6a6a58b',
          address: 'zeus.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        }
      ],
      persistent_peers: [
        {
          id: '6afae5a544d74a8581da932aaa6d483ce797a6b1',
          address: '75.119.157.167:28656',
          provider: 'Inter Blockchain Services'
        },
        {
          id: '83a9601e707ec12fc646586b9e13021a234d5eec',
          address: '207.180.254.180:26656',
          provider: 'Badgerbite'
        },
        {
          id: 'b8c14fa7676da89aed7b0fd46ed5c4c866d0a3b7',
          address: '154.12.240.174:26656',
          provider: 'Badgerbite'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://poseidon.mainnet.decentr.xyz',
          provider: 'decentr'
        },
        {
          address: 'https://rpc.decentr.badgerbite.xyz:443',
          provider: 'BadgerBite'
        },
        {
          address: 'https://ares.mainnet.decentr.xyz',
          provider: 'decentr'
        },
        {
          address: 'https://rpc.decentr.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc.decentr.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://decentr-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        }
      ],
      rest: [
        {
          address: 'https://rest.mainnet.decentr.xyz',
          provider: 'decentr'
        },
        {
          address: 'https://api.decentr.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api.decentr.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://decentr-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.decentr.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'decentr.net',
        url: 'https://explorer.decentr.net',
        tx_page:
          'https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/decentr/',
        tx_page: 'https://ping.pub/decentr/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/decentr',
        tx_page: 'https://atomscan.com/decentr/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'desmos',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://desmos.network/',
    pretty_name: 'Desmos',
    chain_id: 'desmos-mainnet',
    bech32_prefix: 'desmos',
    daemon_name: 'desmos',
    node_home: '$HOME/.desmos',
    key_algos: ['secp256k1'],
    slip44: 852,
    fees: {
      fee_tokens: [
        {
          denom: 'udsm',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/desmos-labs/desmos',
      recommended_version: 'v4.7.0',
      compatible_versions: ['v4.7.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v4.7.0/desmos-4.7.0-linux-amd64',
        'linux/arm64':
          'https://github.com/desmos-labs/desmos/releases/download/v4.7.0/desmos-4.7.0-linux-arm64',
        'darwin/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v4.7.0/desmos-4.7.0-darwin-amd64',
        'windows/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v4.7.0/desmos-4.7.0-windows-amd64.exe'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5',
          address: 'seed-1.mainnet.desmos.network:26656',
          provider: 'desmos'
        },
        {
          id: '5c86915026093f9a2f81e5910107cf14676b48fc',
          address: 'seed-2.mainnet.desmos.network:26656',
          provider: 'desmos'
        },
        {
          id: '45105c7241068904bdf5a32c86ee45979794637f',
          address: 'seed-3.mainnet.desmos.network:26656',
          provider: 'desmos'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16256',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '15b1f6b49a548e9f0d0855bd340199bce9140add',
          address: 'seed-desmos.starsquid.io:15601',
          provider: 'Starsquid'
        },
        {
          id: '4914d4b60123a625d41da7cad9950a4a12ce61ca',
          address: 'desmos-seed.panthea.eu:39656',
          provider: 'Panthea EU'
        },
        {
          id: '6580d5123923ec1426c67658d2ae1e68cfd6a62f',
          address: 'seeds.whispernode.com:16256',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '7c506d9e32cfc486ea714ee0c0307022398b8c20',
          address: 'desmos-peer.panthea.eu:29656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.mainnet.desmos.network',
          provider: 'desmos'
        },
        {
          address: 'https://desmos-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://desmos-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc-desmos.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://desmos.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://desmos-rpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://api.mainnet.desmos.network',
          provider: 'desmos'
        },
        {
          address: 'https://desmos-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://desmos-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://desmos.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://desmos-api.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      grpc: [
        {
          address: 'https://desmos-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://desmos.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/desmos',
        tx_page: 'https://ezstaking.tools/desmos/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explorer.desmos.network',
        tx_page: 'https://explorer.desmos.network/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/desmos',
        tx_page: 'https://www.mintscan.io/desmos/txs/${txHash}',
        account_page: 'https://www.mintscan.io/desmos/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/desmos',
        tx_page: 'https://ping.pub/desmos/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/desmos',
        tx_page: 'https://atomscan.com/desmos/transactions/${txHash}'
      },
      {
        kind: 'TC Network',
        url: 'https://explorer.tcnetwork.io/desmos',
        tx_page: 'https://explorer.tcnetwork.io/desmos/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'dig',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://digchain.org/',
    pretty_name: 'Dig Chain',
    chain_id: 'dig-1',
    bech32_prefix: 'dig',
    daemon_name: 'digd',
    node_home: '$HOME/.dig',
    key_algos: ['secp256k1', 'ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'udig',
          low_gas_price: 0.025,
          average_gas_price: 0.03,
          high_gas_price: 0.035
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'udig'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/notional-labs/dig',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/notional-labs/dig/master/networks/mainnets/dig-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '37b2839da4463b22a51b1fe20d97992164270eba',
          address: '62.171.157.192:26656'
        },
        {
          id: 'e2c96b96d4c3a461fb246edac3b3cdbf47768838',
          address: '65.21.202.37:6969'
        }
      ],
      persistent_peers: [
        {
          id: '33f4788e1c6a378b929c66f31e8d253b9fd47c47',
          address: '194.163.154.251:26656'
        },
        {
          id: '64eccffdc60a206227032d3a021fbf9dfc686a17',
          address: '194.163.156.84:26656'
        },
        {
          id: 'be7598b2d56fb42a27821259ad14aff24c40f3d2',
          address: '172.16.152.118:26656'
        },
        {
          id: 'f446e37e47297ce9f8951957d17a2ae9a16db0b8',
          address: '137.184.67.162:26656'
        },
        {
          id: 'ab2fa2789f481e2856a5d83a2c3028c5b215421d',
          address: '144.91.117.49:26656'
        },
        {
          id: 'e9e89250b40b4512237c77bd04dc76c06a3f8560',
          address: '185.214.135.205:26656'
        },
        {
          id: '1539976f4ee196f172369e6f348d60a6e3ec9e93',
          address: '159.69.147.189:26656'
        },
        {
          id: '85316823bee88f7b05d0cfc671bee861c0237154',
          address: '95.217.198.243:26656'
        },
        {
          id: 'eb55b70c9fd8fc0d5530d0662336377668aab3f9',
          address: '185.194.219.128:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-1-dig.notional.ventures'
        },
        {
          address: 'https://rpc-dig-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api-1-dig.notional.ventures'
        },
        {
          address: 'https://api-dig-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-dig-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/dig',
        tx_page: 'https://ping.pub/dig/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/dig',
        tx_page: 'https://atomscan.com/dig/transactions/${txHash}'
      },
      {
        kind: 'TC Network',
        url: 'https://explorer.tcnetwork.io/dig',
        tx_page: 'https://explorer.tcnetwork.io/dig/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'dyson',
    website: 'https://dysonprotocol.com/',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Dyson Protocol',
    chain_id: 'dyson-mainnet-01',
    bech32_prefix: 'dys',
    node_home: '$HOME/.dyson',
    daemon_name: 'dysond',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'dys',
          low_gas_price: 0.0001,
          average_gas_price: 0.0002,
          high_gas_price: 0.0003
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'dys'
        }
      ]
    },
    codebase: {
      git_repo: 'https://gitlab.com/dysonproject/dyson',
      recommended_version: 'v0.0.2-bebf2e98',
      compatible_versions: ['v0.0.2-bebf2e98'],
      genesis: {
        genesis_url:
          'https://gitlab.com/dysonproject/dyson-deploy/-/raw/develop/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '2c4f8e193fd10ab3a2bc919b484fd1c78eceffb3',
          address: '85.159.211.61:26656',
          provider: ''
        },
        {
          id: '1f3bd1f48c7c277e7be83895cdbb46f8333adb61',
          address: '178.79.183.171:26656',
          provider: ''
        }
      ],
      persistent_peers: [
        {
          id: '2c4f8e193fd10ab3a2bc919b484fd1c78eceffb3',
          address: '85.159.211.61:26656',
          provider: ''
        },
        {
          id: '2c4f8e193fd10ab3a2bc919b484fd1c78eceffb3',
          address: '85.159.211.61:26656',
          provider: ''
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://dys-tm.dyson.lol:443',
          provider: 'lol'
        },
        {
          address: 'https://dys-tm.dysonprotocol.com:443',
          provider: 'dysonprotocol'
        }
      ],
      rest: [
        {
          address: 'https://dys-api.dyson.lol:443',
          provider: 'lol'
        },
        {
          address: 'https://dys-api.dysonprotocol.com:443',
          provider: 'dysonprotocol'
        }
      ],
      grpc: [
        {
          address: 'https://dys-grpc.dyson.lol:443',
          provider: 'lol'
        }
      ]
    },
    explorers: [
      {
        kind: 'dysonprotocol',
        url: 'https://explorer.dys.dysonprotocol.com/dyson/',
        tx_page: 'https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}'
      },
      {
        kind: 'lol',
        url: 'https://explorer.dys.dyson.lol',
        tx_page: 'https://explorer.dys.dyson.lol/dyson/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'echelon',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Echelon',
    chain_id: 'echelon_3000-3',
    bech32_prefix: 'echelon',
    node_home: '$HOME/.echelond',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aechelon'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/echelonfoundation/echelon',
      recommended_version: 'v1.1.4',
      compatible_versions: ['v1.1.4', 'v1.0.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Windows_x86_64.zip'
      },
      genesis: {
        genesis_url:
          'https://gist.githubusercontent.com/echelonfoundation/ee862f58850fc1b5ee6a6fdccc3130d2/raw/55c2c4ea2fee8a9391d0dc55b2c272adb804054a/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '395dc53caf836f04474aa8069e8099b0629763a1',
          address: '154.53.63.113:26656',
          provider: 'Universe'
        },
        {
          id: '302ccf96853501c14060ffac2e1885bed6385f00',
          address: '154.53.63.119:26656',
          provider: 'Rolex'
        },
        {
          id: 'b001eeb22b03e74d5c57c4c097359a9f8c564dd1',
          address: '209.126.87.32:26656',
          provider: 'Supreme'
        },
        {
          id: '6cd1cc8658dc66523f6e8d9ddf7dacae2ef62e6a',
          address: '154.12.237.224:26656',
          provider: 'LockIt'
        },
        {
          id: '480db41faea6713405c93c505ff710a05d1fc801',
          address: '94.250.203.190:26656',
          provider: 'Echelon'
        }
      ],
      persistent_peers: [
        {
          id: '395dc53caf836f04474aa8069e8099b0629763a1',
          address: '154.53.63.113:26656',
          provider: 'Universe'
        },
        {
          id: '302ccf96853501c14060ffac2e1885bed6385f00',
          address: '154.53.63.119:26656',
          provider: 'Rolex'
        },
        {
          id: 'b001eeb22b03e74d5c57c4c097359a9f8c564dd1',
          address: '209.126.87.32:26656',
          provider: 'Supreme'
        },
        {
          id: '6cd1cc8658dc66523f6e8d9ddf7dacae2ef62e6a',
          address: '154.12.237.224:26656',
          provider: 'LockIt'
        },
        {
          id: '480db41faea6713405c93c505ff710a05d1fc801',
          address: '94.250.203.190:26656',
          provider: 'Echelon'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://tendermint.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://rpc-echelon.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://echelon-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.eu.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://rpc.us.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://ech-rpc.softpaws.xyz',
          provider: 'SoftPaws'
        }
      ],
      rest: [
        {
          address: 'https://api.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://lcd-echelon.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://echelon-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.eu.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://api.us.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://ech-api.softpaws.xyz',
          provider: 'SoftPaws'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://grpc.eu.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://grpc.us.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://ech-grpc.softpaws.xyz',
          provider: 'SoftPaws'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://rpc.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://evm.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://draco.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://jsonrpc.echelon.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://jrpc.eu.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://jrpc.us.ech.world',
          provider: 'ech.world 🌍'
        },
        {
          address: 'https://ech-evm.softpaws.xyz',
          provider: 'SoftPaws'
        }
      ]
    },
    explorers: [
      {
        kind: 'echelon',
        url: 'https://app.ech.network/explorer',
        tx_page: 'https://app.ech.network/explorer/tx/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://scout.ech.network',
        tx_page: 'https://scout.ech.network/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/echelon',
        tx_page: 'https://ping.pub/echelon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/echelon',
        tx_page: 'https://atomscan.com/echelon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/echelon',
        tx_page: 'https://atomscan.com/echelon/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'emoney',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'e-Money',
    chain_id: 'emoney-3',
    bech32_prefix: 'emoney',
    daemon_name: 'emd',
    node_home: '$HOME/.emd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ungm'
        },
        {
          denom: 'eeur'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/e-money/em-ledger',
      recommended_version: 'v1.1.3',
      compatible_versions: ['v1.1.3'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/e-money/networks/master/emoney-3/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '708e559271d4d75d7ea2c3842e87d2e71a465684',
          address: 'seed-1.emoney.validator.network:28656',
          provider: 'validator.network'
        },
        {
          id: '336cdb655ea16413a8337e730683ddc0a24af9de',
          address: 'seed-2.emoney.validator.network:28656',
          provider: 'validator.network'
        },
        {
          id: 'eb491498b8f91a02090c2feb7ad875df4087772e',
          address: 'seeds.goldenratiostaking.net:1625',
          provider: 'Golden Ratio Staking'
        },
        {
          id: 'ecec8933d80da5fccda6bdd72befe7e064279fc1',
          address: '207.180.213.123:26676',
          provider: 'easy2stake'
        },
        {
          id: '0ad7bc7687112e212bac404670aa24cd6116d097',
          address: '50.18.83.75:26656',
          provider: 'B-Harvest'
        },
        {
          id: '1723e34f45f54584f44d193ce9fd9c65271ca0b3',
          address: '13.124.62.83:26656',
          provider: 'B-Harvest'
        },
        {
          id: '34eca4a9142bf9c087a987b572c114dad67a8cc5',
          address: '172.105.148.191:26656',
          provider: 'Cat Boss'
        },
        {
          id: '0b186517e4d82eb4c000a567e486b7b96bf19752',
          address: '44.195.95.22:26656',
          provider: 'Cat Boss'
        },
        {
          id: '0b186517e4d82eb4c000a567e486b7b96bf19752',
          address: '44.195.95.22:26656',
          provider: 'Mr K'
        },
        {
          id: 'eed66085c975189e3d498fe61af2fcfb3da34924',
          address: '217.79.184.40:26656',
          provider: 'MissionControl'
        },
        {
          id: '226d713acb10a1cd09b3b890406b886d7b071cf2',
          address: '10.105.2.101:26656',
          provider: 'ATEAM'
        },
        {
          id: '552cb87c40f879c8c41005eeb36030502671e7a4',
          address: '18.156.91.213:26656',
          provider: 'ATEAM'
        },
        {
          id: '170255a4a9b120786d2d6c3931ebf0125087cca0',
          address: '62.171.171.139:26656',
          provider: 'KalpaTech'
        },
        {
          id: 'd12ac664ff9766e0535c836173111e3eed462e79',
          address: '185.144.83.157:26656',
          provider: 'Inotel'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'emoney.mainnet.seed.autostake.net:26746',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'emoney.mainnet.peer.autostake.net:26746',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-emoney.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://emoney.validator.network',
          provider: 'e-Money'
        },
        {
          address: 'https://rpc.emoney.badgerbite.xyz:443',
          provider: 'BadgerBite'
        },
        {
          address: 'https://rpc-emoney-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.emoney.freak12techno.io/',
          provider: 'freak12techno'
        },
        {
          address: 'https://e-money-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc.emoney.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://lcd-emoney.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://emoney.validator.network/api/',
          provider: 'e-Money'
        },
        {
          address: 'https://api-emoney-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.emoney.freak12techno.io/',
          provider: 'freak12techno'
        },
        {
          address: 'https://e-money-api.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://api.emoney.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://emoney.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-emoney-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'grpc.emoney.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/emoney',
        tx_page: 'https://ezstaking.tools/emoney/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://emoney.bigdipper.live/',
        tx_page: 'https://emoney.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/emoney',
        tx_page: 'https://www.mintscan.io/emoney/txs/${txHash}',
        account_page: 'https://www.mintscan.io/emoney/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/e-money',
        tx_page: 'https://ping.pub/e-money/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/emoney',
        tx_page: 'https://atomscan.com/emoney/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'ethos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Ethos',
    chain_id: 'ethos_7003-1',
    bech32_prefix: 'ethos',
    daemon_name: 'ethosd',
    node_home: '$HOME/.ethos',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aRYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://ethos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://ethos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://ethos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://ethos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
    },
    codebase: {
      genesis: {
        genesis_url: ''
      }
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'evmos',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://evmos.org/',
    pretty_name: 'Evmos',
    chain_id: 'evmos_9001-2',
    bech32_prefix: 'evmos',
    node_home: '$HOME/.evmosd',
    daemon_name: 'evmosd',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aevmos',
          fixed_min_gas_price: 250000000,
          low_gas_price: 20000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'aevmos'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/evmos/evmos',
      recommended_version: 'v10.0.1',
      compatible_versions: ['v10.0.0', 'v10.0.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/evmos/evmos/releases/download/v10.0.0/evmos_10.0.0_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/evmos/evmos/releases/download/v10.0.0/evmos_10.0.0_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/evmos/evmos/releases/download/v10.0.0/evmos_10.0.0_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/evmos/evmos/releases/download/v10.0.0/evmos_10.0.0_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/evmos/evmos/releases/download/v10.0.0/evmos_10.0.0_Windows_x86_64.zip'
      },
      genesis: {
        genesis_url: 'https://archive.evmos.org/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:13456',
          provider: 'RHINO'
        },
        {
          id: '906840c2f447915f3d0e37bc68221f5494f541db',
          address: '3.39.58.32:26656',
          provider: 'Cosmostation'
        },
        {
          id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
          address: '52.10.99.253:26656',
          provider: 'Cosmostation'
        },
        {
          id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
          address: '54.39.18.27:26656',
          provider: 'Figment'
        },
        {
          id: 'de2c5e946e21360d4ffa3885579fa038a7d9776e',
          address: '46.101.148.190:26656',
          provider: 'DragonStake'
        },
        {
          id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
          address: 'evmos-sentry.mercury-nodes.net:29539',
          provider: 'Mercury'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13456',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:13456',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'evmos.mainnet.seed.autostake.net:26736',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '40f4fac63da8b1ce8f850b0fa0f79b2699d2ce72',
          address: 'seed.evmos.jerrychong.com:26656',
          provider: "Jerry's Pool"
        },
        {
          id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
          address: 'evmos.seed.node75.org:10756',
          provider: 'Pro-nodes75'
        },
        {
          id: 'e4f7c3181d0028209c664bfd4c259f2c4d947491',
          address: 'seeds.whispernode.com:13456',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '906840c2f447915f3d0e37bc68221f5494f541db',
          address: '3.39.58.32:26656',
          provider: 'Cosmostation'
        },
        {
          id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
          address: '52.10.99.253:26656',
          provider: 'Cosmostation'
        },
        {
          id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
          address: '54.39.18.27:26656',
          provider: 'Figment'
        },
        {
          id: 'de2c5e946e21360d4ffa3885579fa038a7d9776e',
          address: '46.101.148.190:26656',
          provider: 'DragonStake'
        },
        {
          id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
          address: 'evmos-sentry.mercury-nodes.net:29539',
          provider: 'Mercury'
        },
        {
          id: 'a7779498a15dfd5adc678f0f6672935413413f42',
          address: 'alice.peers.evmos.bh.rocks:26656',
          provider: 'BlockHunters'
        },
        {
          id: 'd4a5fcc56f369665c232788c22844dc3a018fe08',
          address: 'peer.evmos.silknodes.io:26602',
          provider: 'Silk Nodes'
        },
        {
          id: '2d588e1bc71431f6c677a9ed7f5ff8f7caa82573',
          address: 'evmos-rpc.agoranodes.com:26656',
          provider: 'AgoraNodes'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'evmos.mainnet.peer.autostake.net:26736',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.evmos.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://rpc-evmos.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://rpc-evmos.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://evmos.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://evmos-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://tendermint.bd.evmos.org:26657',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://rpc-evmos-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.evmos.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://rpc.evmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://rpc.evmos.testnet.run',
          provider: 'TestNetRun'
        },
        {
          address: 'https://rpc.evmos.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc.evmos.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'https://rpc-evmos.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://rpc.evmos.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://evmos-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.evmos.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://evmos-rpc.agoranodes.com/',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://rpc.evmos.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://rpc.evmos.tcnetwork.io',
          provider: 'TC Network'
        },
        {
          address: 'https://evmos.rpc.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://rpc-evmos.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://evmos-rpc.validatrium.club',
          provider: 'Validatrium'
        }
      ],
      rest: [
        {
          address: 'https://api.evmos.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://rest-evmos.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://lcd-evmos.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://evmos.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rest.bd.evmos.org:1317',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://evmos-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-evmos-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd.evmos.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://api.evmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://api.evmos.testnet.run',
          provider: 'TestNetRun'
        },
        {
          address: 'https://lcd.evmos.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'https://rpc.evmos.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api.evmos.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://evmos-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.evmos.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://evmos-rest.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://api.evmos.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://rest.evmos.tcnetwork.io',
          provider: 'TC Network'
        },
        {
          address: 'https://evmos.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://rest-evmos.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://evmos-api.validatrium.club',
          provider: 'Validatrium'
        },
        {
          address: 'https://evmos.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.evmos.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://grpc.bd.evmos.org:9090',
          provider: 'evmos.org'
        },
        {
          address: 'grpc-evmos-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'grpc.evmos.posthuman.digital:443',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://evmos-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'evmos.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'grpc.evmos.testnet.run:8091',
          provider: 'TestNetRun'
        },
        {
          address: 'https://grpc.evmos.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc.evmos.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'https://evmos.grpcui.chaintools.host/',
          provider: 'ChainTools'
        },
        {
          address: 'evmos-grpc.polkachu.com:13490',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.evmos.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://evmos-grpc.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://grpc.evmos.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'evmos.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://eth.bd.evmos.org:8545',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://jsonrpc-evmos-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://evmos-json-rpc.stakely.io',
          provider: 'Stakely'
        },
        {
          address: 'https://jsonrpc.evmos.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://json-rpc.evmos.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'https://evmos-json-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://evm-rpc.evmos.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://json-rpc.evmos.tcnetwork.io',
          provider: 'TC Network'
        },
        {
          address: 'https://jsonrpc-evmos.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://evmosevm.rpc.stakin-nodes.com',
          provider: 'Stakin'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/evmos',
        tx_page: 'https://ezstaking.tools/evmos/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/evmos',
        tx_page: 'https://www.mintscan.io/evmos/txs/${txHash}',
        account_page: 'https://www.mintscan.io/evmos/account/${accountAddress}'
      },
      {
        kind: 'bigdipper',
        url: 'https://evmos.bigdipper.live',
        tx_page: 'https://evmos.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://evm.evmos.org',
        tx_page: 'https://evm.evmos.org/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/evmos',
        tx_page: 'https://ping.pub/evmos/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://evmos.explorers.guru',
        tx_page: 'https://evmos.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/evmos',
        tx_page: 'https://atomscan.com/evmos/transactions/${txHash}'
      },
      {
        kind: 'tcnetwork',
        url: 'https://evmos.tcnetwork.io',
        tx_page: 'https://evmos.tcnetwork.io/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'fetchhub',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Fetch.ai',
    chain_id: 'fetchhub-4',
    bech32_prefix: 'fetch',
    daemon_name: 'fetchd',
    node_home: '$HOME/.fetchd',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'afet',
          low_gas_price: 0.025,
          average_gas_price: 0.025,
          high_gas_price: 0.035
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'afet'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/fetchai/fetchd',
      recommended_version: 'v0.10.5',
      compatible_versions: ['v0.10.5'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/fetchai/genesis-fetchhub/fetchhub-4/fetchhub-4/data/genesis_migrated_5300200.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '17693da418c15c95d629994a320e2c4f51a8069b',
          address: 'connect-fetchhub.fetch.ai:36456',
          provider: 'fetch.ai'
        },
        {
          id: 'a575c681c2861fe945f77cb3aba0357da294f1f2',
          address: 'connect-fetchhub.fetch.ai:36457',
          provider: 'fetch.ai'
        },
        {
          id: 'd7cda986c9f59ab9e05058a803c3d0300d15d8da',
          address: 'connect-fetchhub.fetch.ai:36458',
          provider: 'fetch.ai'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15256',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: 'e3d21a822e3903a96c14bfd8f8e06132f198d7c4',
          address: 'sentries-fetchhub.fetch.ai:36400',
          provider: 'fetch.ai'
        },
        {
          id: '4be243f5d22403f6069d2ed3c4a79161216f22a0',
          address: 'sentries-fetchhub.fetch.ai:36401',
          provider: 'fetch.ai'
        },
        {
          id: 'd6faadb9e785642b355136ed278d5b5d6b2f87dd',
          address: 'sentries-fetchhub.fetch.ai:36402',
          provider: 'fetch.ai'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-fetchhub.fetch.ai:443',
          provider: 'fetch.ai'
        },
        {
          address: 'https://fetchapi.terminet.io',
          provider: 'Terminet'
        },
        {
          address: 'https://rpc-fetchhub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://fetch-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://fetchai-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://fetch-rpc.teasel.org',
          provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
        },
        {
          address: 'https://fetch-rpc.antrixy.org',
          provider: 'Antrix'
        },
        {
          address: 'https://rpc-fetch.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://fetch-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      rest: [
        {
          address: 'https://rest-fetchhub.fetch.ai',
          provider: 'fetch.ai'
        },
        {
          address: 'https://api-fetchhub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://fetch-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://fetchai-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://fetch-rest.teasel.org',
          provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
        },
        {
          address: 'https://fetch-rest.antrixy.org',
          provider: 'Antrix'
        },
        {
          address: 'https://rest-fetch.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://fetch-api.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      grpc: [
        {
          address: 'https://grpc-fetchhub.fetch.ai:443',
          provider: 'fetch.ai'
        },
        {
          address: 'grpc-fetchhub-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'fetch-grpc.polkachu.com:15290',
          provider: 'Polkachu'
        },
        {
          address: 'fetch-grpc.teasel.org:443',
          provider: '𝗧𝗲𝗮𝘀𝗲𝗹'
        },
        {
          address: 'fetch-grpc.antrixy.org:443',
          provider: 'Antrix'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/fetchai',
        tx_page: 'https://www.mintscan.io/fetchai/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/fetchai/account/${accountAddress}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explore-fetchhub.fetch.ai',
        tx_page: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/fetchhub',
        tx_page: 'https://ping.pub/fetchhub/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/fetchai',
        tx_page: 'https://atomscan.com/fetchai/transactions/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://fetch-explorer.teasel.org',
        tx_page: 'https://fetch-explorer.teasel.org/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'firmachain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://firmachain.org/',
    pretty_name: 'FirmaChain',
    chain_id: 'colosseum-1',
    bech32_prefix: 'firma',
    slip44: 7777777,
    fees: {
      fee_tokens: [
        {
          denom: 'ufct',
          fixed_min_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/firmachain/firmachain',
      recommended_version: 'v0.3.3',
      compatible_versions: ['v0.3.3'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/FirmaChain/mainnet/main/colosseum-1/genesis.json'
      }
    },
    daemon_name: 'firmachaind',
    node_home: '$HOME/.firmachain',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: 'f89dcc15241e30323ae6f491011779d53f9a5487',
          address: 'mainnet-seed1.firmachain.dev:26656',
          provider: 'FirmaChain'
        },
        {
          id: '04cce0da4cf5ceb5ffc04d158faddfc5dc419154',
          address: 'mainnet-seed2.firmachain.dev:26656',
          provider: 'FirmaChain'
        },
        {
          id: '940977bdc070422b3a62e4985f2fe79b7ee737f7',
          address: 'mainnet-seed3.firmachain.dev:26656',
          provider: 'FirmaChain'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16456',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://lcd-mainnet.firmachain.dev:26657',
          provider: 'FirmaChain'
        },
        {
          address: 'https://rpc.firmachain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://firmachain-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      rest: [
        {
          address: 'https://lcd-mainnet.firmachain.dev:1317',
          provider: 'FirmaChain'
        },
        {
          address: 'https://api.firmachain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://firmachain-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      grpc: [
        {
          address: 'https://firmachain-grpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/firmachain',
        tx_page: 'https://ezstaking.tools/firmachain/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explorer.firmachain.dev',
        tx_page: 'https://explorer.firmachain.dev/transactions/${txHash}'
      },
      {
        kind: 'explorer.ChainTools',
        url: 'https://explorer.chaintools.tech/firmachain',
        tx_page: 'https://explorer.chaintools.tech/firmachain/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'galaxy',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://galaxychain.zone/',
    pretty_name: 'Galaxy',
    chain_id: 'galaxy-1',
    bech32_prefix: 'galaxy',
    daemon_name: 'galaxyd',
    node_home: '$HOME/.galaxy',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uglx',
          low_gas_price: 0.025,
          average_gas_price: 0.025,
          high_gas_price: 0.035
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uglx'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/galaxies-labs/galaxy',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://github.com/OrbisWorlds/networks/raw/main/galaxy-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '574e8402e255f895680db2904168724258fd6ff8',
          address: '13.125.60.249:26656',
          provider: 'Galaxies Labs'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14856',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: 'bf446887a7a00c8babfeba2f92ba569a206a3ea7',
          address: '65.108.71.140:26676',
          provider: 'StakeLab'
        },
        {
          id: '1e9ee1911298a15128c8485ea47b18be08939e01',
          address: '136.244.29.116:38656',
          provider: 'OtterSync'
        },
        {
          id: 'a4bd8fed416aa29d9cc061e2b9dffa7f4b679c91',
          address: '65.21.131.144:30656',
          provider: 'Blockscope'
        },
        {
          id: '801f4e17769bd2ee02b27720d901a42cb8d052ea',
          address: '65.108.192.3:24656',
          provider: 'Paranormal Brothers'
        },
        {
          id: '8fc2d8c2fadd278eae617a9c2a2f008e01e8ef68',
          address: '206.246.71.251:26656',
          provider: 'TAKESHI'
        },
        {
          id: '10f7caa39969dc36450b138848a06e7deabe6fed',
          address: '95.111.244.128:26656',
          provider: 'Pathrocknetwork'
        },
        {
          id: 'cd8fd9e1677c701015b8909116f88974028cd0b4',
          address: '203.135.141.28:26656',
          provider: 'Decentralizehk'
        },
        {
          id: 'b4b6f1563f2891ed5735d6133d78fc7c17ce12d0',
          address: '185.234.69.139:26656',
          provider: 'DomaNodes'
        },
        {
          id: '5b3fd251b74e6af11f4c71d420fd1837f4869e85',
          address: '45.33.62.64:26656',
          provider: 'FireStake'
        },
        {
          id: '51b3263a333de94198fe4c4d819b48fbd107f93a',
          address: '5.9.13.234:26356',
          provider: 'Goooodnes'
        },
        {
          id: 'e21bf32eaedee13d8dc240baacf23fee97a8edac',
          address: '141.94.141.144:43656',
          provider: 'cyberG'
        },
        {
          id: '8b447bd4fa1e56d8252538a6e23573e5e78924fa',
          address: '161.97.155.94:26656',
          provider: '3Tekos'
        },
        {
          id: '8d059154ea0a6e25c5695a1e163e601482769604',
          address: '95.217.207.236:31256',
          provider: 'web34ever'
        },
        {
          id: '7ded7314f57a078076507d7b291e100ad2dc158b',
          address: '65.108.41.172:36656',
          provider: 'moonsoon'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.galaxychain.zone'
        },
        {
          address: 'https://galaxy-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://galaxy.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rpc.galaxy.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://rest.galaxychain.zone'
        },
        {
          address: 'https://galaxy-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://galaxy.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://api.galaxy.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      grpc: [
        {
          address: 'galaxy-grpc.polkachu.com:14890',
          provider: 'Polkachu'
        },
        {
          address: 'https://galaxy.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://grpc.galaxy.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://explorer.postcapitalist.io/Galaxy',
        tx_page: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'genesisl1',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'GenesisL1',
    chain_id: 'genesis_29-2',
    bech32_prefix: 'genesis',
    daemon_name: 'genesisd',
    node_home: '$HOME/.genesisd',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'el1',
          low_gas_price: 999999999,
          average_gas_price: 1000000000,
          high_gas_price: 1000000001
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'el1'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/alpha-omega-labs/genesisd',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0'],
      genesis: {
        genesis_url:
          'https://github.com/alpha-omega-labs/genesisd/raw/neolithic/genesis_29-1-state/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '36111b4156ace8f1cfa5584c3ccf479de4d94936',
          address: '65.21.34.226:26656',
          provider: 'GenesisL1'
        },
        {
          id: 'c23b3d58ccae0cf34fc12075c933659ff8cca200',
          address: '95.217.207.154:26656'
        },
        {
          id: '37d8aa8a31d66d663586ba7b803afd68c01126c4',
          address: '65.21.134.70:26656'
        },
        {
          id: 'd7d4ea7a661c40305cab84ac227cdb3814df4e43',
          address: '139.162.195.228:26656'
        },
        {
          id: 'be81a20b7134552e270774ec861c4998fabc2969',
          address: 'genesisl1.3ventures.io:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://26657.genesisl1.org',
          provider: 'GenesisL1'
        }
      ],
      rest: [
        {
          address: 'https://api.genesisl1.org',
          provider: 'GenesisL1'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/genesisL1',
        tx_page: 'https://ping.pub/genesisL1/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://exp.utsa.tech/genesis',
        tx_page: 'https://exp.utsa.tech/genesis/tx/${txHash}'
      },
      {
        kind: 'ATOMScan',
        url: 'https://atomscan.com/genesisl1',
        tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'gravitybridge',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.gravitybridge.net/',
    pretty_name: 'Gravity Bridge',
    chain_id: 'gravity-bridge-3',
    bech32_prefix: 'gravity',
    daemon_name: 'gravity',
    node_home: '$HOME/.gravity',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ugraviton',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0,
          high_gas_price: 0.035
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ugraviton'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Gravity-Bridge/Gravity-Bridge',
      recommended_version: 'v1.8.0',
      compatible_versions: ['v1.8.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-amd64',
        'linux/arm64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-linux-arm64',
        'darwin/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-darwin-amd64',
        'windows/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.8.0/gravity-windows-amd64.exe'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '2b089bfb4c7366efb402b48376a7209632380c9c',
          address: '65.19.136.133:26656',
          provider: 'althea'
        },
        {
          id: '63e662f5e048d4902c7c7126291cf1fc17687e3c',
          address: '95.211.103.175:26656',
          provider: 'amhost'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14256',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:14256',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
          address: 'gravity.seed.node75.org:10556',
          provider: 'Pro-Nodes'
        }
      ],
      persistent_peers: [
        {
          id: '21be3f7686c24f8bd9442b325a50f5b5227777a7',
          address: '202.61.231.15:26656',
          provider: 'SkyNet'
        },
        {
          id: '9aa7e0c250466a2a147f8b7d2b886b0d45d44ca0',
          address: '45.138.49.222:26656',
          provider: 'ps350'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://gravitychain.io:26657',
          provider: 'althea'
        },
        {
          address: 'http://gravity-bridge-1-08.nodes.amhost.net:26657',
          provider: 'amhost'
        },
        {
          address: 'https://gravity-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-gravitybridge-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://gravitybridge-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.gravity.bh.rocks/',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://gravitychain.io:1317',
          provider: 'althea'
        },
        {
          address: 'https://api-gravitybridge-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://gravity-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://gravitybridge-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.gravity.bh.rocks/',
          provider: 'BlockHunters 🎯'
        }
      ],
      grpc: [
        {
          address: 'https://gravitychain.io:9090',
          provider: 'althea'
        },
        {
          address: 'gravity-bridge-1-08.nodes.amhost.net:9090',
          provider: 'amhost'
        },
        {
          address: 'grpc-gravitybridge-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://grpc.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'gravity-grpc.polkachu.com:14290',
          provider: 'Polkachu'
        },
        {
          address: 'https://gravitybridge-grpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.gravity.bh.rocks:443/',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/gravitybridge',
        tx_page: 'https://ezstaking.tools/gravitybridge/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/gravity-bridge',
        tx_page: 'https://www.mintscan.io/gravity-bridge/${txHash}',
        account_page:
          'https://www.mintscan.io/gravity-bridge/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/gravity-bridge',
        tx_page: 'https://ping.pub/gravity-bridge/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://gravity.explorers.guru',
        tx_page: 'https://gravity.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/gravity-bridge',
        tx_page: 'https://atomscan.com/gravity-bridge/transactions/${txHash}'
      },
      {
        kind: 'TC Network',
        url: 'https://explorer.tcnetwork.io/gravitybridge',
        tx_page:
          'https://explorer.tcnetwork.io/gravitybridge/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'idep',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.idep.network/',
    pretty_name: 'IDEP',
    chain_id: 'Antora',
    bech32_prefix: 'idep',
    daemon_name: 'idep',
    node_home: '$HOME/.ion',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'idep',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/IDEP-network/ion',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64': 'https://github.com/IDEP-network/Antora/raw/main/iond'
      },
      genesis: {
        genesis_url:
          'https://github.com/IDEP-network/Antora/raw/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '6e52997400aaa1b3d2155e45cf2559bf7a4c5e76',
          address: '164.92.161.91:26656',
          provider: 'IDEP'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16556',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: '8ffc74dbcd5ab32bc89e058ec53060d5762f88b5',
          address: '178.63.100.102:26656',
          provider: 'IDEP'
        },
        {
          id: '3a8cfcbaac7d102e9cfad31f856e1852be2125f3',
          address: 'sentry-1.idep.ezstaking.xyz:26756',
          provider: 'EZStaking.io'
        },
        {
          id: '32a1a93033968e391266484cd4896dfc9b326e4c',
          address: 'sentry-2.idep.ezstaking.xyz:26789',
          provider: 'EZStaking.io'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.idep.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://idep-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      rest: [
        {
          address: 'https://api.idep.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://idep-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.idep.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://idep-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/idep',
        tx_page: 'https://ezstaking.tools/idep/txs/${txHash}'
      },
      {
        kind: 'chadscan',
        url: 'https://chadscan.com',
        tx_page: 'https://chadscan.com/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/idep',
        tx_page: 'https://atomscan.com/idep/transactions/${txHash}'
      },
      {
        kind: 'TC Network',
        url: 'https://explorer.tcnetwork.io/idep',
        tx_page: 'https://explorer.tcnetwork.io/idep/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'impacthub',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.ixo.world/',
    pretty_name: 'ixo',
    chain_id: 'ixo-4',
    bech32_prefix: 'ixo',
    daemon_name: 'ixod',
    node_home: '$HOME/.ixod',
    key_algos: ['secp256k1', 'ed25519'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uixo',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ixofoundation/ixo-blockchain',
      recommended_version: 'v0.19.2',
      compatible_versions: ['v0.19.2'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ixofoundation/genesis/980961a8e344dd39bd092493e58b4421aa1c0014/ixo-4/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
          address: '80.64.208.43:26656',
          provider: 'simplyvc'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16656',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
          address: '80.64.208.43:26656',
          provider: 'simplyvc'
        },
        {
          id: 'c95af93f0386f8e19e65997262c9f874d1901dc5',
          address: '18.163.242.188:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-impacthub.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
          provider: 'sifchain'
        },
        {
          address: 'https://impacthub.ixo.world/rpc/',
          provider: 'ixoworld'
        },
        {
          address: 'https://rpc-ixo-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://impacthub-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://ixo-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      rest: [
        {
          address: 'https://lcd-impacthub.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
          provider: 'sifchain'
        },
        {
          address: 'http://18.220.101.192:1317/',
          provider: 'regen'
        },
        {
          address: 'https://impacthub.ixo.world/rest/',
          provider: 'ixoworld'
        },
        {
          address: 'https://api-ixo-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://impacthub-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://ixo-api.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      grpc: [
        {
          address: 'grpc-ixo-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://impacthub-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/impacthub',
        tx_page: 'https://ezstaking.tools/impacthub/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://blockscan.ixo.world',
        tx_page: 'https://blockscan.ixo.world/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/ixo',
        tx_page: 'https://ping.pub/ixo/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/ixo',
        tx_page: 'https://atomscan.com/ixo/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'imversed',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://imversed.network/',
    pretty_name: 'Imversed',
    chain_id: 'imversed_5555555-1',
    bech32_prefix: 'imv',
    daemon_name: 'imversed',
    node_home: '$HOME/.imversed',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aimv',
          fixed_min_gas_price: 250000000,
          low_gas_price: 20000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'aimv'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/imversed/imversed',
      recommended_version: 'v3.11',
      compatible_versions: ['v3.11'],
      binaries: {
        'linux/amd64':
          'https://github.com/imversed/imversed/releases/download/v3.11/imversed_3.11_Linux_amd64.tar.gz'
      },
      genesis: {
        genesis_url: 'https://static.imversed.com/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '6413d43ff0dce9400515f24e8e93a0cf28f0efff',
          address: '35.209.184.54:26656'
        }
      ],
      persistent_peers: [
        {
          id: '0968486e82c910b1d7adaacb43bf7e633b19665a',
          address: '35.209.184.219:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.imversed.network:443',
          provider: 'imversed'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.imversed.network:443',
          provider: 'imversed'
        }
      ],
      rest: [
        {
          address: 'https://rest.imversed.network:443',
          provider: 'imversed'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://jsonrpc.imversed.network:443',
          provider: 'imversed'
        }
      ]
    },
    explorers: [
      {
        kind: 'blockscout',
        url: 'https://txe.imversed.network/',
        tx_page: 'https://txe.imversed.network/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'injective',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://injective.com/',
    pretty_name: 'Injective',
    chain_id: 'injective-1',
    bech32_prefix: 'inj',
    extra_codecs: ['injective'],
    slip44: 60,
    daemon_name: 'injectived',
    node_home: '$HOME/.injectived',
    fees: {
      fee_tokens: [
        {
          denom: 'inj',
          low_gas_price: 500000000,
          average_gas_price: 700000000,
          high_gas_price: 900000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'inj'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/InjectiveLabs/injective-chain-releases',
      recommended_version: 'v1.8.0-1668679102',
      compatible_versions: ['v1.8.0-1668679102'],
      binaries: {
        'linux/amd64':
          'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.8.0-1668679102/linux-amd64.zip',
        'darwin/amd64':
          'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.8.0-1668679102/darwin-amd64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/InjectiveLabs/mainnet-config/master/10001/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '38c18461209694e1f667ff2c8636ba827cc01c86',
          address: '176.9.143.252:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '4f9025feca44211eddc26cd983372114947b2e85',
          address: '176.9.140.49:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'c98bb1b889ddb58b46e4ad3726c1382d37cd5609',
          address: '65.109.51.80:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209',
          address: '65.109.36.70:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'f9ae40fb4a37b63bea573cc0509b4a63baa1a37a',
          address: '15.235.114.80:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '7f3473ddab10322b63789acb4ac58647929111ba',
          address: '15.235.13.116:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14356',
          provider: 'polkachu.com'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'injective.mainnet.seed.autostake.net:26726',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '1846e76e14913124a07e231586d487a0636c0296',
          address: 'tenderseed.ccvalidators.com:26007',
          provider: 'ccvalidators.com'
        }
      ],
      persistent_peers: [
        {
          id: '38c18461209694e1f667ff2c8636ba827cc01c86',
          address: '176.9.143.252:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '4f9025feca44211eddc26cd983372114947b2e85',
          address: '176.9.140.49:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'c98bb1b889ddb58b46e4ad3726c1382d37cd5609',
          address: '65.109.51.80:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '23d0eea9bb42316ff5ea2f8b4cd8475ef3f35209',
          address: '65.109.36.70:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'f9ae40fb4a37b63bea573cc0509b4a63baa1a37a',
          address: '15.235.114.80:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: '7f3473ddab10322b63789acb4ac58647929111ba',
          address: '15.235.13.116:11751',
          provider: 'injectivelabs.org'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'injective.mainnet.peer.autostake.net:26726',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://k8s.global.mainnet.tm.injective.network:443',
          provider: 'Injectivelabs'
        },
        {
          address: 'https://injective-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://injective-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-injective-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://k8s.global.mainnet.lcd.injective.network:443',
          provider: 'Injectivelabs'
        },
        {
          address: 'https://injective-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://api-injective-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://injective-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://injective.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'k8s.global.mainnet.chain.grpc.injective.network:443',
          provider: 'Injectivelabs'
        },
        {
          address: 'grpc-injective-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'injective-grpc.polkachu.com:14390',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'injectiveprotocol',
        url: 'https://explorer.injective.network/',
        tx_page: 'https://explorer.injective.network/transaction/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/injective',
        tx_page: 'https://ping.pub/injective/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/injective',
        tx_page: 'https://atomscan.com/injective/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/injective',
        tx_page: 'https://www.mintscan.io/injective/${txHash}',
        account_page:
          'https://www.mintscan.io/injective/account/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'irisnet',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'IRISnet',
    chain_id: 'irishub-1',
    bech32_prefix: 'iaa',
    daemon_name: 'iris',
    node_home: '$HOME/.iris',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uiris'
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uiris'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/irisnet/irishub',
      recommended_version: 'v1.3.0',
      compatible_versions: ['v1.3.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '6a6de770deaa4b8c061dffd82e9c7f4d40c2165d',
          address: 'seed-1.mainnet.irisnet.org:26656'
        },
        {
          id: 'a17d7923293203c64ba75723db4d5f28e642f469',
          address: 'seed-2.mainnet.irisnet.org:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'fdc0406afdd3acc63f74f5439e09104f663a7c1f',
          address: '44.241.177.178:26656',
          provider: 'cosmostation'
        },
        {
          id: '090bcbe5302e6104821a96c4899912870db04cb9',
          address: '52.11.128.123:26656',
          provider: 'cosmostation'
        },
        {
          id: '83b3f989f3ce089afdf733f8aa06e792d7e00c08',
          address: '3.34.6.30:26656',
          provider: 'cosmostation'
        },
        {
          id: '87f18756b93d835c59fe5ce2a8da51858837eb5b',
          address: '54.180.15.28:26656',
          provider: 'Node-A-Team'
        },
        {
          id: '90e48220190b16cad95145b6213d512d703e5617',
          address: '138.197.158.189:26656',
          provider: 'Figment'
        },
        {
          id: 'ebfb43ca1b592b5f8a1faf3e2aa1a34e8e1099cc',
          address: 'iris01.dokia.cloud:26656',
          provider: 'Dokia'
        },
        {
          id: '92fadc989ed29aee0d46afce3226f8565d1f36cb',
          address: '144.91.116.17:46656',
          provider: 'syncnode'
        },
        {
          id: '4ac6200974d3fd80a8e49d145a2c254ed37a9b9a',
          address: '159.69.106.156:26656',
          provider: 'P2P.ORG'
        },
        {
          id: '4e02a4b4f4350ea2b770cd03dc41fedcadb13176',
          address: '159.69.55.206:26656',
          provider: 'P2P.ORG'
        },
        {
          id: '84cc32adca3986b35953886ad075431d318a98b5',
          address: '52.214.130.28:46656',
          provider: 'stake.fish'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-iris.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-irisnet-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-iris.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-irisnet-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-irisnet-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/irisnet',
        tx_page: 'https://ezstaking.tools/irisnet/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/iris',
        tx_page: 'https://www.mintscan.io/iris/txs/${txHash}',
        account_page: 'https://www.mintscan.io/iris/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/iris-network',
        tx_page: 'https://ping.pub/iris-network/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/iris-network',
        tx_page: 'https://atomscan.com/iris-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'jackal',
    chain_id: 'jackal-1',
    website: 'https://jackalprotocol.com',
    pretty_name: 'Jackal',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'jkl',
    daemon_name: 'canined',
    node_home: '$HOME/.canine',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujkl',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/JackalLabs/canine-chain',
      recommended_version: 'v1.1.2-hotfix',
      compatible_versions: ['v1.1.2-hotfix'],
      binaries: {
        'linux/amd64':
          'https://github.com/JackalLabs/canine-chain/releases/download/v1.1.2/canined-Linux',
        'darwin/amd64':
          'https://github.com/JackalLabs/canine-chain/releases/download/v1.1.2/canined-macOS'
      },
      genesis: {
        genesis_url:
          'https://cdn.discordapp.com/attachments/1002389406650466405/1034968352591986859/updated_genesis2.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'fda1f87472c9c2ee89a0ba36a9a9cc38f96e283a',
          address: '198.244.212.27:26656'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:17556',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:17556',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'jackal.mainnet.peer.autostake.net:26906',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'f6c5d2bf222699a35968e5f262baacd6c34e261c',
          address: 'seeds.whispernode.com:17556',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'fda1f87472c9c2ee89a0ba36a9a9cc38f96e283a',
          address: '198.244.212.27:26656'
        },
        {
          id: 'd8203bad2c26883c7fb8be1d259a098a273f0840',
          address: '135.181.20.44:2506'
        },
        {
          id: '53300f221a72ba385f86ca42709a46413d47f5b0',
          address: 'pve7.badgerbite.io:36657'
        },
        {
          id: 'fa0d8085abaf34d9a2349bef0b19dff6f89013b5',
          address: '209.34.206.38:26656'
        },
        {
          id: '0ab9ec918cd36a28be1fcf538f7f76ede2b81659',
          address: '89.58.38.59:26656'
        },
        {
          id: '2af06d39d68345d41cd16182e3472d96c5a0150b',
          address: '136.244.29.116:27656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.jackalprotocol.com',
          provider: 'Jackal Labs'
        },
        {
          address: 'https://jackal-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-jackal.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rpc.jackal.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-jackal.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://jackal-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://jackal-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://m-jackal.rpc.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://jackal-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-jackal.huginn.tech',
          provider: 'Huginn'
        },
        {
          address: 'https://jackal.nodejumper.io:443',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rpc-jkl.kjinc.io',
          provider: 'KJINC.io'
        }
      ],
      rest: [
        {
          address: 'https://api.jackalprotocol.com',
          provider: 'Jackal Labs'
        },
        {
          address: 'https://jackal-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-jackal.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://api.jackal.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-jackal.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://jackal-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://jackal-rest.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://m-jackal.api.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://jackal-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://api.jackal.huginn.tech',
          provider: 'Huginn'
        },
        {
          address: 'https://jackal.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://api-jkl.kjinc.io',
          provider: 'KJINC.io'
        },
        {
          address: 'https://jackal.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.jackalprotocol.com',
          provider: 'Jackal Labs'
        },
        {
          address: 'https://jackal-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.jackal.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-jackal.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://grpc-jackal.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'jackal-grpc.polkachu.com:17590',
          provider: 'Polkachu'
        },
        {
          address: 'https://jackal-grpc.agoranodes.com',
          provider: 'AgoraNodes'
        },
        {
          address: 'https://jackal.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ],
      wss: [
        {
          address: 'wss://jackal-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/jackal',
        tx_page: 'https://ping.pub/jackal/tx/${txHash}'
      },
      {
        kind: 'NodeStake',
        url: 'https://explorer.nodestake.top/jackal',
        tx_page: 'https://explorer.nodestake.top/jackal/tx/${txHash}'
      },
      {
        kind: 'lesnik | UTSA',
        url: 'https://exp.utsa.tech/jackal',
        tx_page: 'https://exp.utsa.tech/jackal/tx/${txHash}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/jackal',
        tx_page: 'https://exp.nodeist.net/jackal/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'juno',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.junonetwork.io/',
    pretty_name: 'Juno',
    chain_id: 'juno-1',
    bech32_prefix: 'juno',
    daemon_name: 'junod',
    node_home: '$HOME/.juno',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujuno',
          fixed_min_gas_price: 0.0025,
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ujuno'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/CosmosContracts/juno',
      recommended_version: 'v11.0.0',
      compatible_versions: ['v11.0.0'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.28',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url: 'https://download.dimi.sh/juno-phoenix2-genesis.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:12656',
          provider: 'RHINO'
        },
        {
          id: '2484353dab0b2c1275765b8ffa2c50b3b36158ca',
          address: 'seed-node.junochain.com:26656'
        },
        {
          id: '90b09362d9ce3845096c4938eea0dba682b0ad2c',
          address: 'juno-seed-new.blockpane.com:26656'
        },
        {
          id: '22ee6e65e5e79cd0b970dd11e52761de8d1d6dfd',
          address: 'seeds.pupmos.network:2001',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12656',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12656',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ea67180befe4d9ca71142d21ada8ff58cc08f71c',
          address: 'seeds.goldenratiostaking.net:1627',
          provider: 'Golden Ratio Staking'
        },
        {
          id: '47d942718533d36823e16b9502c035ca9f318ef4',
          address: 'seeds.whispernode.com:12656',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'b1f46f1a1955fc773d3b73180179b0e0a07adce1',
          address: '162.55.244.250:39656'
        },
        {
          id: '7f593757c0cde8972ce929381d8ac8e446837811',
          address: '178.18.255.244:26656'
        },
        {
          id: '7b22dfc605989d66b89d2dfe118d799ea5abc2f0',
          address: '167.99.210.65:26656'
        },
        {
          id: '4bd9cac019775047d27f9b9cea66b25270ab497d',
          address: '137.184.7.164:26656'
        },
        {
          id: 'bd822a8057902fbc80fd9135e335f0dfefa32342',
          address: '65.21.202.159:38656'
        },
        {
          id: '15827c6c13f919e4d9c11bcca23dff4e3e79b1b8',
          address: '51.38.52.210:38656'
        },
        {
          id: 'e665df28999b2b7b40cff2fe4030682c380bf294',
          address: '188.40.106.109:38656'
        },
        {
          id: '92804ce50c85ff4c7cf149d347dd880fc3735bf4',
          address: '34.94.231.154:26656'
        },
        {
          id: '795ed214b8354e8468f46d1bbbf6e128a88fe3bd',
          address: '34.127.19.222:26656'
        },
        {
          id: 'ea9c1ac0e91639b2c7957d9604655e2263abe4e1',
          address: '185.181.103.136:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://rpc-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rpc-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://juno-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://juno.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://juno-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc-juno-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.juno.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc.juno.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://juno-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc.juno.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://juno.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://juno.rpc.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://juno-rpc.icycro.org',
          provider: 'IcyCRO 🧊'
        },
        {
          address: 'https://rpc-juno.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://rpc.juno.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://rpc.juno.kingnodes.com',
          provider: 'kingnodes 👑'
        },
        {
          address: 'https://juno-rpc.reece.sh',
          provider: 'Reecepbcups'
        },
        {
          address: 'http://juno.rpc.stakeandrelax.net:12657',
          provider: 'Stake&Relax Validator 🦥'
        }
      ],
      rest: [
        {
          address: 'https://lcd-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://lcd-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://juno.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rest-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://juno-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://api-juno-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.juno.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://juno-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.juno.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://juno-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://api.juno.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://juno.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://juno.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://api.juno.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://api.juno.kingnodes.com',
          provider: 'kingnodes 👑'
        },
        {
          address: 'https://juno-api.reece.sh',
          provider: 'Reecepbcups'
        }
      ],
      grpc: [
        {
          address: '35.243.205.230:9090',
          provider: 'strangelove'
        },
        {
          address: 'grpc-juno-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://juno-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://juno.grpcui.chaintools.host/',
          provider: 'ChainTools'
        },
        {
          address: 'juno-grpc.polkachu.com:12690',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.juno.silknodes.io/',
          provider: 'Silk Nodes'
        },
        {
          address: 'juno.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://juno.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'juno.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        },
        {
          address: 'https://grpc.juno.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://grpc.juno.kingnodes.com',
          provider: 'kingnodes 👑'
        },
        {
          address: 'http://juno.grpc.stakeandrelax.net:12690',
          provider: 'Stake&Relax Validator 🦥'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/juno',
        tx_page: 'https://ezstaking.tools/juno/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/juno',
        tx_page: 'https://ping.pub/juno/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://juno.explorers.guru',
        tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/juno',
        tx_page: 'https://www.mintscan.io/juno/txs/${txHash}',
        account_page: 'https://www.mintscan.io/juno/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/juno',
        tx_page: 'https://atomscan.com/juno/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'kava',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.kava.io/',
    pretty_name: 'Kava',
    chain_id: 'kava_2222-10',
    bech32_prefix: 'kava',
    daemon_name: 'kava',
    node_home: '$HOME/.kava',
    slip44: 459,
    codebase: {
      git_repo: 'https://github.com/kava-Labs/kava/',
      recommended_version: 'v0.18.0',
      compatible_versions: ['v0.18.0'],
      genesis: {
        genesis_url:
          'https://kava-genesis-files.s3.us-east-1.amazonaws.com/kava_2222-10/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '5c56fc779cd75c0c4d8225b8afe5259a076608dd',
          address: '18.206.28.123:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13956',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'kava.mainnet.seed.autostake.net:26656',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: '7827de7a17483f79a914f790cc8ca8431b2764d7',
          address: '3.221.174.66:26656'
        },
        {
          id: '1b5be4ece049083399e1d467c219c8978ed8d3ca',
          address: '3.217.223.43:26656'
        },
        {
          id: 'e5d74b3f06226fb0798509e36021e81b7bce934d',
          address: '3.209.43.104:26656'
        },
        {
          id: 'fb4a0dbe6947540bc94f4f2f11ce7c70b8fcffc9',
          address: '54.92.246.92:26656'
        },
        {
          id: '8b5c4a890c8ae7efbbe3360af71be1c3c3a9e12e',
          address: '121.78.241.68:46656'
        },
        {
          id: '1291ef230910953545fb3d83c4e989578da978a1',
          address: '35.157.56.248:26656'
        },
        {
          id: '06d11b66eac77ad7b149773cf974a595dd947398',
          address: '35.247.175.128:50056'
        },
        {
          id: '11f965df6fb3091e0fa3a1e4c129ff697939b827',
          address: '52.26.236.235:26656'
        },
        {
          id: '5a9de901ce9b6961f22cf829f4aefb66dff77d3a',
          address: '54.177.121.234:26656'
        },
        {
          id: '9084eab1fa9414abad5e41416482fe75f39b2071',
          address: '54.215.73.103:26656'
        },
        {
          id: '418cc8f69fa0212503dd5b2a9ac3ce0dd3b33e72',
          address: '13.209.245.58:26656'
        },
        {
          id: 'f3a64f5d1a992d327a5d2b3282d7df294d787832',
          address: '173.212.197.110:26666'
        },
        {
          id: '1074a6f31d2c7df6e21ce0e574a5cb75f1763be1',
          address: '13.56.31.21:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'kava.mainnet.peer.autostake.net:26656',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.data.kava.io',
          provider: 'kava'
        },
        {
          address: 'https://kava-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-kava-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.data.kava.io/',
          provider: 'kava'
        },
        {
          address: 'https://api-kava-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://kava-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://kava.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.data.kava.io/',
          provider: 'kava'
        },
        {
          address: 'grpc-kava-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'kava-grpc.polkachu.com:13990',
          provider: 'Polkachu'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm.kava.io/',
          provider: 'kava'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/kava',
        tx_page: 'https://www.mintscan.io/kava/txs/${txHash}',
        account_page: 'https://www.mintscan.io/kava/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/kava',
        tx_page: 'https://ping.pub/kava/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/kava',
        tx_page: 'https://atomscan.com/kava/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'kichain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://foundation.ki/',
    pretty_name: 'Ki',
    chain_id: 'kichain-2',
    bech32_prefix: 'ki',
    daemon_name: 'kid',
    node_home: '$HOME/.kid',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uxki',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/KiFoundation/ki-tools',
      recommended_version: '4.1.0',
      compatible_versions: ['4.1.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '24cbccfa8813accd0ebdb09e7cdb54cff2e8fcd9',
          address: '51.89.166.197:26656',
          provider: 'kifoundation'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13556',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:13556',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: '81396d4703a2e3cbd136c7324e4df5686fd48218',
          address: '35.180.8.214:26656',
          provider: 'kifoundation'
        },
        {
          id: 'c597db55d9a609b8b77c3d37ecf1fa9a67117cc0',
          address: '144.217.82.4:26656',
          provider: 'kifoundation'
        },
        {
          id: '50af457247b59aa558a26a14bd7ac4bf86eeae70',
          address: '195.201.164.223:26656',
          provider: 'everstake'
        },
        {
          id: '81eef39d2ca9a07490857d197423da4ba5e01879',
          address: '15.188.134.35:26656',
          provider: 'cosmostation'
        },
        {
          id: '5adb5ad6a6fcef624866cefdb551dafdc07f7e78',
          address: '15.188.198.188:26656',
          provider: 'cosmostation'
        },
        {
          id: '41b321292cbe50c5c30017cc71c404481be0e20b',
          address: '3.38.12.5:26656',
          provider: 'cosmostation'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-mainnet.blockchain.ki',
          provider: 'kifoundation'
        },
        {
          address: 'https://kichain-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-kichain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.kichain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://kichain-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.ki.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://ki-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://kichain.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://api-mainnet.blockchain.ki',
          provider: 'kifoundation'
        },
        {
          address: 'https://api-kichain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.kichain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://kichain-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://kichain-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.ki.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://ki-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://kichain.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'grpc-kichain-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'kichain-grpc.polkachu.com:13590',
          provider: 'Polkachu'
        },
        {
          address: 'https://kichain-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.ki.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://kichain.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/kichain',
        tx_page: 'https://ezstaking.tools/kichain/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/ki-chain',
        tx_page: 'https://www.mintscan.io/ki-chain/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/ki-chain/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/kichain',
        tx_page: 'https://ping.pub/kichain/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/ki-chain',
        tx_page: 'https://atomscan.com/ki-chain/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'konstellation',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://konstellation.tech/',
    pretty_name: 'Konstellation',
    chain_id: 'darchub',
    bech32_prefix: 'darc',
    daemon_name: 'knstld',
    node_home: '$HOME/.knstld',
    codebase: {
      git_repo: 'https://github.com/knstl/konstellation',
      recommended_version: 'v0.6.2',
      compatible_versions: ['v0.6.2'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/Konstellation/konstellation/master/config/genesis.json'
      }
    },
    fees: {
      fee_tokens: [
        {
          denom: 'udarc',
          fixed_min_gas_price: 0
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
          address: 'node1.konstellation.tech:26656'
        },
        {
          id: 'a32dda75cf5ffe4ab0ff9a0969e525807e01f2e5',
          address: 'node2.konstellation.tech:26656'
        },
        {
          id: '06fed4bbe81ead6073a7254e860331179af74f4c',
          address: 'node3.konstellation.tech:26656'
        },
        {
          id: 'd4a713a657883cca49d71b1b2cab4ab5e94b0843',
          address: 'node4.konstellation.tech:26656'
        },
        {
          id: '1c9aff1ea9d1cafd584aa61a70582e7c4b0c8675',
          address: 'node5.konstellation.tech:26656'
        },
        {
          id: '0f4eef8db37ec7ef9f6d3324689db2847ee8f795',
          address: 'node10.konstellation.tech:26656'
        },
        {
          id: '7e8119050ecb80450ad476b50423b9230c10c8d0',
          address: 'node11.konstellation.tech:26656'
        },
        {
          id: 'dbb7589202f6c751f2b93c6bbcd0e660676ab91c',
          address: 'node12.konstellation.tech:26656'
        },
        {
          id: 'f2c2ebec24507d54fea88976e9f93f0fbfa0d6d0',
          address: 'node13.konstellation.tech:26656'
        },
        {
          id: '00f7f4506d84f9d1458201946e1194564b444ce0',
          address: 'node14.konstellation.tech:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13356',
          provider: 'Polkachu'
        },
        {
          id: '099ea7cefa6ab8709b78f2491b147361ca2bf6a0',
          address: 'seed-konstellation.starsquid.io:15612',
          provider: 'Starsquid'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'konstellation.mainnet.seed.autostake.net:26826',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
          address: 'node1.konstellation.tech:26656'
        },
        {
          id: 'a32dda75cf5ffe4ab0ff9a0969e525807e01f2e5',
          address: 'node2.konstellation.tech:26656'
        },
        {
          id: '06fed4bbe81ead6073a7254e860331179af74f4c',
          address: 'node3.konstellation.tech:26656'
        },
        {
          id: 'd4a713a657883cca49d71b1b2cab4ab5e94b0843',
          address: 'node4.konstellation.tech:26656'
        },
        {
          id: '1c9aff1ea9d1cafd584aa61a70582e7c4b0c8675',
          address: 'node5.konstellation.tech:26656'
        },
        {
          id: '0f4eef8db37ec7ef9f6d3324689db2847ee8f795',
          address: 'node10.konstellation.tech:26656'
        },
        {
          id: '7e8119050ecb80450ad476b50423b9230c10c8d0',
          address: 'node11.konstellation.tech:26656'
        },
        {
          id: 'dbb7589202f6c751f2b93c6bbcd0e660676ab91c',
          address: 'node12.konstellation.tech:26656'
        },
        {
          id: 'f2c2ebec24507d54fea88976e9f93f0fbfa0d6d0',
          address: 'node13.konstellation.tech:26656'
        },
        {
          id: '00f7f4506d84f9d1458201946e1194564b444ce0',
          address: 'node14.konstellation.tech:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'konstellation.mainnet.peer.autostake.net:26826',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://node1.konstellation.tech:26657',
          provider: 'konstellation'
        },
        {
          address: 'https://konstellation-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.konstellation.badgerbite.xyz:443',
          provider: 'BadgerBite'
        },
        {
          address: 'https://rpc-konstellation-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-konstellation.starsquid.io',
          provider: 'Starsquid'
        }
      ],
      rest: [
        {
          address: 'https://node1.konstellation.tech:1318',
          provider: 'konstellation'
        },
        {
          address: 'https://api-konstellation-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://konstellation-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-konstellation.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://konstellation.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-konstellation-ia.cosmosia.notional.ventures:443/',
          provider: 'Notional'
        },
        {
          address: 'konstellation-grpc.polkachu.com:13390',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'konstellation',
        url: 'https://explorer.konstellation.tech/',
        tx_page: 'https://explorer.konstellation.tech/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/konstellation',
        tx_page: 'https://www.mintscan.io/konstellation/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/konstellation/account/${accountAddress}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'kujira',
    chain_id: 'kaiyo-1',
    pretty_name: 'Kujira',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://kujira.app/',
    bech32_prefix: 'kujira',
    daemon_name: 'kujirad',
    node_home: '$HOME/.kujira',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ukuji',
          fixed_min_gas_price: 0.00119
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Team-Kujira/core',
      recommended_version: 'v0.7.1',
      compatible_versions: ['v0.7.1'],
      genesis: {
        genesis_url:
          'https://github.com/Team-Kujira/networks/raw/master/mainnet/kaiyo-1.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:11856',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:11856',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '322abfd7c0bcdf8a3d98ccb46ae2572bae0e8301',
          address: 'seed-kujira.starsquid.io:15602',
          provider: 'Starsquid'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'kujira.mainnet.seed.autostake.net:26796',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
          address: 'kujira.rpc.kjnodes.com:13659',
          provider: 'kjnodes'
        },
        {
          id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
          address: 'seeds.whispernode.com:11856',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'kujira.mainnet.peer.autostake.net:26796',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-kujira.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://rpc.kaiyo.kujira.setten.io',
          provider: 'setten.io'
        },
        {
          address: 'https://kujira-rpc.polkachu.com',
          provider: 'polkachu'
        },
        {
          address: 'https://rpc-kujira.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://kujira-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.kujira.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc-kujira-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://kujira-rpc.wildsage.io',
          provider: 'WildSage Labs'
        },
        {
          address: 'https://rpc-kujira.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://kujira-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc-kujira.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://kujira.rpc.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://kuji-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-kujira.huginn.tech',
          provider: 'Huginn'
        }
      ],
      grpc: [
        {
          address: 'https://kujira.grpcui.chaintools.host/',
          provider: 'ChainTools'
        },
        {
          address: 'https://grpc-kujira-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://kujira-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'kujira-grpc.polkachu.com:11890',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc-kujira.nodeist.net',
          provider: 'Nodeist'
        }
      ],
      rest: [
        {
          address: 'https://lcd-kujira.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://lcd.kaiyo.kujira.setten.io',
          provider: 'setten.io'
        },
        {
          address: 'https://kujira-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://kujira-api.polkachu.com/',
          provider: 'polkachu'
        },
        {
          address: 'https://rest-kujira.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api.kujira.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api-kujira-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://kujira-lcd.wildsage.io/',
          provider: 'WildSage Labs'
        },
        {
          address: 'https://api-kujira.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://kujira-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://api-kujira.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://kujira.api.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://kuji-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://api.kujira.huginn.tech',
          provider: 'Huginn'
        },
        {
          address: 'https://kujira.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    explorers: [
      {
        kind: 'kujira',
        url: 'https://finder.kujira.app',
        tx_page: 'https://finder.kujira.app/kaiyo-1/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://kujira.explorers.guru',
        tx_page: 'https://kujira.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/kujira',
        tx_page: 'https://atomscan.com/kujira/transactions/${txHash}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/M-Kujira',
        tx_page: 'https://exp.nodeist.net/M-Kujira/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/kujira',
        tx_page: 'https://www.mintscan.io/kujira/txs/${txHash}',
        account_page: 'https://www.mintscan.io/kujira/account/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kujira-chain-logo.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'lambda',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Lambda',
    chain_id: 'lambda_92000-1',
    bech32_prefix: 'lamb',
    node_home: '$HOME/.lambdavm',
    daemon_name: 'lambdavm',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'ulamb',
          low_gas_price: 10000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ulamb'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/LambdaIM/lambdavm',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/LambdaIM/mainnet/main/lambda_92000-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '2c4f8e193fd10ab3a2bc919b484fd1c78eceffb3',
          address: '13.213.214.88:26656',
          provider: 'Lambda'
        },
        {
          id: '50a1a5fe2f00b4ba1f6dd8bfd40b566f1b55b7a3',
          address: 'lambda.peer.stavr.tech:21026',
          provider: 'stavr'
        },
        {
          id: 'd475be798a3b8d9eceb56b5cb276ff75d515cb7b',
          address: '38.242.215.240:26657',
          provider: ''
        },
        {
          id: '4cf9c0f6627d1a936f76cf9a507ad4a74f20a254',
          address: '194.163.165.176:36656',
          provider: ''
        },
        {
          id: '59b74a8b4870ab3f914ca4d9d9fd50e715cc0a58',
          address: '144.76.97.251:45656',
          provider: ''
        }
      ],
      persistent_peers: [
        {
          id: '2c4f8e193fd10ab3a2bc919b484fd1c78eceffb3',
          address: '13.213.214.88:26656',
          provider: 'Lambda'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.lambda.im',
          provider: 'Lambda'
        },
        {
          address: 'https://rpc.lambda.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-lambda.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://lambda-rpc.jambulmerah.dev:443',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ],
      rest: [
        {
          address: 'https://rest.lambda.im',
          provider: 'Lambda'
        },
        {
          address: 'https://api.lambda.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-lambda.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://lambda-api.jambulmerah.dev',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.lambda.im',
          provider: 'Lambda'
        },
        {
          address: 'https://grpc.lambda.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-lambda.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'lambda.grpc.jambulmerah.dev:18090',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://eth.lambda.im',
          provider: 'Lambda'
        },
        {
          address: 'https://jsonrpc.lambda.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://jsonrpc-lambda.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://lambda-jsonrpc.jambulmerah.dev',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ]
    },
    explorers: [
      {
        kind: 'blockscout',
        url: 'https://explorer.lambda.im/',
        tx_page: 'https://explorer.lambda.im/tx/${txHash}'
      },
      {
        kind: 'NodeStake',
        url: 'https://explorer.nodestake.top/lambda',
        tx_page: 'https://explorer.nodestake.top/lambda/txs/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'likecoin',
    status: 'live',
    website: 'https://like.co/',
    network_type: 'mainnet',
    pretty_name: 'LikeCoin',
    chain_id: 'likecoin-mainnet-2',
    bech32_prefix: 'like',
    daemon_name: 'liked',
    node_home: '$HOME/.liked',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'nanolike',
          low_gas_price: 1,
          average_gas_price: 10,
          high_gas_price: 1000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'nanolike'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/likecoin/likecoin-chain',
      recommended_version: 'v3.1.0',
      compatible_versions: ['v3.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.1.0/likecoin-chain_3.1.0_Windows_x86_64.zip'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/likecoin/mainnet/982c14399089950a59d3ebbedcbbc7ead6040457/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '913bd0f4bea4ef512ffba39ab90eae84c1420862',
          address: '34.82.131.35:26656',
          provider: 'like.co'
        },
        {
          id: 'e44a2165ac573f84151671b092aa4936ac305e2a',
          address: 'nnkken.dev:26656',
          provider: 'nnkken'
        }
      ],
      persistent_peers: [
        {
          id: 'f087d600cf3d34d3bac04a9723a53180619e8445',
          address: '35.247.83.138:26656',
          provider: 'like.co'
        },
        {
          id: '75822abfbcc23dcefd025e245b46e2dec5357f75',
          address: '207.246.101.4:26656',
          provider: 'forbole'
        },
        {
          id: '9f62898076c35d78df21c1d2280be922221c23af',
          address: '139.59.8.62:2180',
          provider: 'Notional'
        },
        {
          id: '20afcd5637b2278efc78c54fd523bd331d1820f2',
          address: '78.47.110.110:26656',
          provider: 'moonbeam'
        },
        {
          id: '5940f55e0e7e2f1a2c9507bf62fbfd7c6d2f3874',
          address: 'likechain.oursky.com:26656',
          provider: 'Oursky'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet-node.like.co/rpc/',
          provider: 'like.co'
        },
        {
          address: 'https://rpc-likecoin-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://mainnet-node.like.co',
          provider: 'like.co'
        },
        {
          address: 'https://api-likecoin-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-likecoin-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/likecoin',
        tx_page: 'https://www.mintscan.io/likecoin/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/likecoin/account/${accountAddress}'
      },
      {
        kind: 'bigdipper',
        url: 'https://likecoin.bigdipper.live/',
        tx_page: 'https://likecoin.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'lunie-ng',
        url: 'https://stake.like.co/'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/likecoin',
        tx_page: 'https://ping.pub/likecoin/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/likecoin',
        tx_page: 'https://atomscan.com/likecoin/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/likecoin-chain-logo.svg'
    },
    keywords: ['depub', 'like']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'logos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Logos',
    chain_id: 'logos_7002-1',
    bech32_prefix: 'logos',
    daemon_name: 'logosd',
    node_home: '$HOME/.logos',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aLYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://logos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://logos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://logos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://logos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
    },
    codebase: {
      genesis: {
        genesis_url: ''
      }
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'loyal',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.joinloyal.com/',
    pretty_name: 'Loyal',
    chain_id: 'loyal-1',
    bech32_prefix: 'loyal',
    daemon_name: 'loyald',
    node_home: '$HOME/.loyal',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ulyl',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ulyl'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/LoyalLabs/loyal',
      recommended_version: 'v0.25.1',
      compatible_versions: ['v0.25.1'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/LoyalLabs/net/main/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '7490c272d1c9db40b7b9b61b0df3bb4365cb63a6',
          address: 'loyal-seed.netdots.net:26656'
        },
        {
          id: 'f8f5d04e17c998478c29ba6ab74b2e995a2b6dcd',
          address: 'tenderseed.ccvalidators.com:29002'
        }
      ],
      persistent_peers: [
        {
          id: 'b66ecdf36bb19a9af0460b3ae0901aece93ae006',
          address: 'pubnode1.joinloyal.io:26656'
        },
        {
          id: '9f779b69d2ba3548de5427432571e8f88f72a59a',
          address: '149.102.153.60:2566'
        },
        {
          id: '7490c272d1c9db40b7b9b61b0df3bb4365cb63a6',
          address: '54.80.32.192:26656'
        },
        {
          id: 'a19b19f09084e9f1579243a5613efde8ae5aa946',
          address: '65.21.199.148:26624'
        },
        {
          id: '607dbee191f06d9479d7ae8f9fc5de75ca840d6f',
          address: '185.215.167.227:31656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://main-rpc.joinloyal.io/'
        }
      ],
      rest: [
        {
          address: 'https://main-lcd.joinloyal.io/'
        }
      ]
    },
    explorers: [
      {
        kind: 'Loyal explorer',
        url: 'https://ping-pub.joinloyal.io/loyal',
        tx_page: 'https://ping-pub.joinloyal.io/loyal/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'lumenx',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'LumenX',
    chain_id: 'LumenX',
    bech32_prefix: 'lumen',
    daemon_name: 'lumenxd',
    node_home: '$HOME/.lumenx',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ulumen',
          fixed_min_gas_price: 0.0025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/metaprotocol-ai/lumenx',
      recommended_version: 'v0.1.0',
      compatible_versions: ['v0.1.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/metaprotocol-ai/lumenx/master/config/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'bc22063df30a0644df742cdb2764b1004df6e3e3',
          address: 'node1.lumenex.io:26656'
        },
        {
          id: '9cd5f77ac27254891f64801470b0c3432188c62c',
          address: 'node2.lumenex.io:26656'
        },
        {
          id: '78669849476c8b728abe178475c6f016edf175cf',
          address: 'node3.lumenex.io:26656'
        },
        {
          id: '48444a4bacc0cafa049d777152473769ab17c0c3',
          address: 'node4.lumenex.io:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'bc22063df30a0644df742cdb2764b1004df6e3e3',
          address: 'node1.lumenex.io:26656'
        },
        {
          id: '9cd5f77ac27254891f64801470b0c3432188c62c',
          address: 'node2.lumenex.io:26656'
        },
        {
          id: '78669849476c8b728abe178475c6f016edf175cf',
          address: 'node3.lumenex.io:26656'
        },
        {
          id: '48444a4bacc0cafa049d777152473769ab17c0c3',
          address: 'node4.lumenex.io:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.lumenx.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc-lumenx.cryptonet.pl/',
          provider: 'CryptoNet'
        }
      ],
      rest: [
        {
          address: 'https://api.lumenx.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api-lumenx.cryptonet.pl/',
          provider: 'CryptoNet'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://explorer.chaintools.tech/lumenx',
        tx_page: 'https://explorer.chaintools.tech/lumenx/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'lumnetwork',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://lum.network/',
    pretty_name: 'Lum Network',
    chain_id: 'lum-network-1',
    bech32_prefix: 'lum',
    daemon_name: 'lumd',
    node_home: '$HOME/.lumd',
    key_algos: ['secp256k1'],
    slip44: 880,
    fees: {
      fee_tokens: [
        {
          denom: 'ulum',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/lum-network/chain',
      recommended_version: 'v1.3.0',
      compatible_versions: ['v1.3.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/lum-network/mainnet/master/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '19ad16527c98b782ee35df56b65a3a251bd99971',
          address: 'peer-1.mainnet.lum.network:26656',
          provider: 'lum foundation'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16756',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: '6e73250b636b55e8c1033ba96c14b9cc6d45958c',
          address: 'seed-lum.starsquid.io:15608',
          provider: 'Starsquid'
        },
        {
          id: '0df233b1eb62504f96a856ce358014b2fb8ce91b',
          address: 'lum-seed.panthea.eu:43656',
          provider: 'Panthea EU'
        }
      ],
      persistent_peers: [
        {
          id: 'b47626b9d78ed7ed3c413304387026f907c70cbe',
          address: 'peer-0.mainnet.lum.network:26656',
          provider: 'lum foundation'
        },
        {
          id: 'e12fcc7d9fc9b8b2901aec950f161418794cccf0',
          address: '65.108.77.38:26656',
          provider: 'everstake'
        },
        {
          id: '4166de0e7721b6eec9c776abf2c38c40e7f820c5',
          address: '202.61.239.130:26656',
          provider: 'stakecito'
        },
        {
          id: 'fbaeeff89ec94a4f6c4a2a61e24af7d06b3be0c8',
          address: '46.166.140.180:26656',
          provider: 'simply staking'
        },
        {
          id: '5a29947212a2615e43dac54deb55356a162e173a',
          address: '35.181.76.160:26656',
          provider: 'imperator'
        },
        {
          id: '5ea36d78ae774c9086c2d3fc8b91f12aa4bf3029',
          address: '46.101.251.76:26656',
          provider: 'cryptocrew'
        },
        {
          id: '433c60a5bc0a693484b7af26208922b84773117e',
          address: '34.209.132.0:26656',
          provider: 'cosmostation'
        },
        {
          id: '9afac13ba62fbfaf8d06867c30007162511093c0',
          address: '54.214.134.223:26656',
          provider: 'cosmostation'
        },
        {
          id: '43216584c1e6b1056566a4825b15cdfbfc79d9e8',
          address: 'lum-peer.panthea.eu:33656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://node0.mainnet.lum.network/rpc',
          provider: 'Lum Foundation'
        },
        {
          address: 'https://lum-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-lum.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://lum-rpc.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://rpc.lum.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://node0.mainnet.lum.network/rest',
          provider: 'Lum Foundation'
        },
        {
          address: 'https://lum-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-lum.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://lum-api.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://api.lum.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      grpc: [
        {
          address: 'https://lum-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.lum.bh.rocks:443/',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/lumnetwork',
        tx_page: 'https://ezstaking.tools/lumnetwork/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/lum',
        tx_page: 'https://www.mintscan.io/lum/txs/${txHash}',
        account_page: 'https://www.mintscan.io/lum/account/${accountAddress}'
      },
      {
        kind: 'lum-network',
        url: 'https://explorer.lum.network',
        tx_page: 'https://explorer.lum.network/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/lum-network',
        tx_page: 'https://ping.pub/lum-network/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/lum-network',
        tx_page: 'https://atomscan.com/lum-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'medasdigital-1',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://medas-digital.io/',
    pretty_name: 'Medas Digital Network',
    chain_id: 'medasdigital-1',
    bech32_prefix: 'medas',
    daemon_name: 'medasdigitald',
    node_home: '$HOME/.medasdigital',
    key_algos: ['secp256k1'],
    fees: {
      fee_tokens: [
        {
          denom: 'umedas',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.1,
          high_gas_price: 1
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'umedas'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/oxygene76/medasdigital/',
      recommended_version: 'v0.94',
      compatible_versions: ['v0.94'],
      genesis: {
        genesis_url:
          'https://github.com/oxygene76/medasdigital/tree/main/networks/mainnet/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: 'afa88136727d46b4c15fe6e041f53fdb25cc37c0',
          address: '212.6.177.10:26656',
          provider: 'Neptun Validator'
        },
        {
          id: 'a50887a49a5c908631a036013d38cc825b10f8fe',
          address: '212.6.177.11:26656',
          provider: 'Uranus Validator'
        },
        {
          id: 'e89a2ed10488de6d8134ff67101aa1a883a0c6bd',
          address: '212.6.177.12:26656',
          provider: 'Saturn Validator'
        },
        {
          id: '95d55f5d4a61d18508441f3357fadf221abe43ca',
          address: '64.251.18.192:26656',
          provider: 'Mars Validator'
        },
        {
          id: '15376dbf45a1cf907958e2a684c436a62cc0825d',
          address: '67.207.180.166:26656',
          provider: 'Jupiter Validator'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.medas-digital.io:26657/',
          provider: 'Neptun Validator'
        }
      ],
      grpc: [
        {
          address: 'grpc.medas-digital.io:9090',
          provider: 'Neptun Validator'
        }
      ],
      rest: [
        {
          address: 'https://lcd.medas-digital.io:1317/',
          provider: 'Neptun Validator'
        }
      ]
    },
    explorers: [
      {
        kind: 'Mintscan',
        url: 'https://www.mintscan.io/medasdigital',
        tx_page: 'https://www.mintscan.io/medasdigital/txs/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'meme',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'MEME',
    chain_id: 'meme-1',
    bech32_prefix: 'meme',
    daemon_name: 'memed',
    node_home: '$HOME/.memed',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'umeme',
          fixed_min_gas_price: 0.025,
          low_gas_price: 0.025,
          average_gas_price: 0.035,
          high_gas_price: 0.045
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'umeme'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/memecosmos/meme/',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      genesis: {
        genesis_url:
          'https://github.com/memecosmos/mainnet/raw/main/meme-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'dbe97ebeb4d07999a1fe2de2f92a56cc07385259',
          address: 'seeds.pupmos.network:2005',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14756',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: 'a9959fef554ee407f23dffbcd4c0711e02a07d18',
          address: '207.246.107.204:26656',
          provider: 'MEME Foundation'
        },
        {
          id: 'f6e846ee01e14bc06e9b1b8be9237d8c365614e7',
          address: '45.76.154.44:26656',
          provider: 'MEME Foundation'
        },
        {
          id: '1e2a4e7c513d1ba267fe2e689d4dfe6d6105f644',
          address: '139.180.140.142:26656',
          provider: 'MEME Foundation'
        },
        {
          id: 'c57fce65a0e6be87763ae38d607b817b3acde620',
          address: '173.212.215.104:26656',
          provider: 'Theamsolutions'
        },
        {
          id: 'c1e05690adfbc970817e0debb5d7770ee9f2f3ac',
          address: '65.108.131.174:47656',
          provider: 'Polkachu'
        },
        {
          id: 'fc21b0c26b6840915f6fe2daf56565e1c30e0956',
          address: '162.55.245.104:26656',
          provider: 'PUPMØS'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-meme-1.meme.sx/',
          provider: 'MEME Foundation'
        },
        {
          address: 'https://meme-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-meme.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://meme-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'http://meme.statesync.nodersteam.com:26657',
          provider: 'Nodersteam'
        },
        {
          address: 'https://rpc.meme.interbloc.org/',
          provider: 'Interbloc'
        }
      ],
      rest: [
        {
          address: 'https://api-meme-1.meme.sx/',
          provider: 'MEME Foundation'
        },
        {
          address: 'https://api.meme.interbloc.org/',
          provider: 'Interbloc'
        },
        {
          address: 'https://meme-api.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-meme.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://meme-api.kleomedes.network',
          provider: 'Kleomedes'
        }
      ],
      grpc: [
        {
          address: 'meme-grpc.polkachu.com:14790',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/meme',
        tx_page: 'https://ping.pub/meme/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/meme',
        tx_page: 'https://atomscan.com/meme/transactions/${txHash}',
        account_page: 'https://atomscan.com/meme/accounts/${accountAddress}'
      },
      {
        kind: 'MEME Explorer',
        url: 'https://explorer.meme.sx/meme',
        tx_page: 'https://explorer.meme.sx/meme/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/meme',
        tx_page: 'https://atomscan.com/meme/transactions/${txHash}'
      },
      {
        kind: 'Brochain',
        url: 'https://explorer.brocha.in/meme',
        tx_page: 'https://explorer.brocha.in/meme/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'microtick',
    status: 'killed',
    network_type: 'mainnet',
    pretty_name: 'Microtick',
    chain_id: 'microtick-1',
    bech32_prefix: 'micro',
    daemon_name: 'mtm',
    codebase: {
      git_repo: 'https://github.com/microtick/mtzone',
      recommended_version: 'mtm-v2.0.4',
      compatible_versions: ['mtm-v2.0.4'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/microtick/stargate-genesis/master/genesis.json'
      }
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/microtick',
        tx_page: 'https://ping.pub/microtick/tx/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'mises',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://mises.site',
    pretty_name: 'Mises',
    chain_id: 'mainnet',
    bech32_prefix: 'mises',
    node_home: '$HOME/.misestm',
    daemon_name: 'misestmd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'umis',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'umis'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/mises-id/mises-tm',
      recommended_version: 'v1.0.4',
      compatible_versions: ['v1.0.4'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/mises-id/mainnet/master/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '1070b5c04c9b2af28aedf1b8cbeaf7e90b123464',
          address: 'rpc.gw.mises.site:36656',
          provider: 'Mises-1'
        },
        {
          id: '40a8318fa18fa9d900f4b0d967df7b1020689fa0',
          address: 'e1.mises.site:26656',
          provider: 'Mises-2'
        },
        {
          id: '0d25c5db4cbdc4171c8272278040db774011c268',
          address: 'e2.mises.site:26656',
          provider: 'Mises-3'
        },
        {
          id: '1adcfe9b030125b9caa72f3eae3b1274cbaca2cd',
          address: 'w1.mises.site:26656',
          provider: 'Mises-4'
        },
        {
          id: '1a96557a74cb8448249b9d15c3cc38cd3aff553d',
          address: 'w2.mises.site:26656',
          provider: 'Mises-5'
        }
      ],
      persistent_peers: [
        {
          id: 'de2eff71ca8f2bce98418ab3538a366bc7e9dca0',
          address: 'mises.peer.jambulmerah.dev:16656',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.gw.mises.site:443',
          provider: 'Mises-1'
        },
        {
          address: 'https://e1.mises.site:443',
          provider: 'Mises-2'
        },
        {
          address: 'https://e2.mises.site:443',
          provider: 'Mises-3'
        },
        {
          address: 'https://w1.mises.site:443',
          provider: 'Mises-4'
        },
        {
          address: 'https://w2.mises.site:443',
          provider: 'Mises-5'
        },
        {
          address: 'https://mises-rpc.jambulmerah.dev:443',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ],
      rest: [
        {
          address: 'https://mises-api.jambulmerah.dev',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ],
      grpc: [
        {
          address: 'mises.grpc.jambulmerah.dev:16090',
          provider: 'JambulMerah | Cosmos⚛️Lovers❤️'
        }
      ]
    },
    explorers: [
      {
        kind: 'Mises-GW Explorer',
        url: 'https://gw.mises.site',
        tx_page: 'https://gw.mises.site/tx/${txHash}'
      },
      {
        kind: 'Jambulmerah ping.pub based',
        url: 'https://explorer.jambulmerah.dev/mises',
        tx_page: 'https://explorer.jambulmerah.dev/mises/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'mythos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Mythos',
    chain_id: 'mythos_7001-1',
    bech32_prefix: 'mythos',
    daemon_name: 'mythosd',
    node_home: '$HOME/.mythosd',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aMYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://mythos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://mythos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://mythos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://mythos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
    },
    codebase: {
      genesis: {
        genesis_url: ''
      }
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'nomic',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Nomic',
    website: 'https://nomic.io/',
    chain_id: 'nomic-stakenet-3',
    bech32_prefix: 'nomic',
    daemon_name: 'nomic',
    node_home: '$HOME/.nomic-stakenet-3',
    codebase: {
      git_repo: 'https://github.com/nomic-io/nomic',
      recommended_version: 'develop',
      compatible_versions: ['develop', 'v3'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/nomic-io/nomic/develop/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '238120dfe716082754048057c1fdc3d6f09609b5',
          address: '161.35.51.124:26656'
        },
        {
          id: 'a67d7a4d90f84d5c67bfc196aac68441ba9484a6',
          address: '167.99.119.196:26659'
        },
        {
          id: '34544f82960d2ff2b1defb7b04f097557f4183be',
          address: 'seeds.goldenratiostaking.net:26656',
          provider: 'Golden Ratio Staking'
        },
        {
          id: '10beadbcd4bc5fef8a1f5f57353bdb8646f7a554',
          address: 'seeds.whispernode.com:26656',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'http://138.197.71.46:26657',
          provider: 'nomic-io'
        },
        {
          address: 'https://nomic-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.nomic.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://rpc.nomic.bh.rocks',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://app.nomic.io:8443',
          provider: 'nomic-io'
        }
      ]
    },
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'nyx',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://nymtech.net/',
    pretty_name: 'Nym',
    chain_id: 'nyx',
    bech32_prefix: 'n',
    daemon_name: 'nyxd',
    node_home: '$HOME/.nyxd',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'unym',
          fixed_min_gas_price: 0.25
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/nymtech/nym/',
      recommended_version: 'v.1.1',
      compatible_versions: ['v1.0'],
      binaries: {
        'linux/amd64': 'https://github.com/nymtech/nym/releases/'
      },
      genesis: {
        genesis_url: 'https://nymtech.net/genesis/genesis.json'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: '4acf579e2744268f834c713e894850995bbf0ffa',
          address: '50.18.31.225:26656'
        },
        {
          id: '33f8e220cc44f2fed6a839b55f4520f0cf6fa8b2',
          address: '142.132.147.189:38656'
        },
        {
          id: 'a58b9b102e7d91f4900036b40b8232d386245c55',
          address: '3.65.247.65:26656'
        },
        {
          id: '5185b9f7abedbbbf48149491731fe9b6aa39b17b',
          address: '38.242.194.49:26656'
        },
        {
          id: 'ee03a6777fb76a2efd0106c3769daaa064a3fcb5',
          address: '51.79.21.187:26656'
        },
        {
          id: '6bac8d8e4b43a230d2da45480d82ec87144c2f23',
          address: 'nyx-validator.nym.blockfend.com:26656'
        },
        {
          id: '3905ef90a12784a6f0ae4435fcd8ad13816f12ac',
          address: '35.245.211.169:26656'
        },
        {
          id: '510cdd3e5ed0367eafa3d1c277ede2e0a4536dbb',
          address: '35.215.58.39:26656'
        },
        {
          id: 'ded5157860dcd05e6308ef453df9bd53c1112bb6',
          address: '35.215.44.229:26656'
        },
        {
          id: '2f57a4a5926ceadb91a6df09a82ebad322777a6c',
          address: 'sentry-2.nym.ezstaking.xyz:26666'
        },
        {
          id: '8fb63514b6325459fb90ede3b3697ec0827b6f50',
          address: '35.223.70.235:26656'
        },
        {
          id: '6625c048105d86d8bd6c22bc1359e10f4de1e6d4',
          address: '34.125.78.165:26656'
        },
        {
          id: '7c5a3701cb4095fd28484e39d29e270001c19ae1',
          address: '65.108.110.59:38656'
        },
        {
          id: 'a0fd38e40fd53699437d90456e0a2e62df0607e0',
          address: '15.235.9.199:26656'
        },
        {
          id: 'e6d01a3ab3467953d14ad79a56a5a5eec0625096',
          address: '35.215.56.11:26656'
        },
        {
          id: '22120fe1203d2721cda9dd2548a346fdae43aedb',
          address: '51.79.80.25:26656'
        },
        {
          id: '611c8b24adc5ae17477b3dfedae32af117d6d276',
          address: '35.215.45.32:26656'
        },
        {
          id: '4e1663adac48c439baa5fbaebb9c9ddde91f9c18',
          address: '51.79.72.10:26656'
        },
        {
          id: 'b436cf49cd0e163ea1aa9eaf38e3d2250eb42c9e',
          address: '51.222.248.217:26656'
        },
        {
          id: '2e2ae7a117b22c0a09b685b963603150f702b6af',
          address: '144.126.133.37:10053'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.nyx.nodes.guru/',
          provider: 'nodes guru'
        },
        {
          address: 'https://nym.vladiatorlabs.io/',
          provider: 'vladiatorlabs'
        },
        {
          address: 'https://rpc.nyx.ezstaking.io/',
          provider: 'ezstaking'
        },
        {
          address: 'https://rpc.nym.forbole.com/',
          provider: 'forbole'
        },
        {
          address: 'https://rpc-nyx.testnet.run/',
          provider: 'testnet-run'
        },
        {
          address: 'https://nym-mainnet-rpc.commodum.io/',
          provider: 'commodum'
        },
        {
          address: 'https://nym-rpc.polkachu.com/',
          provider: 'polkachu'
        }
      ],
      rest: [
        {
          address: 'https://api.akash.forbole.com:443',
          provider: 'nodes guru'
        }
      ],
      grpc: [
        {
          address: 'nym-grpc.polkachu.com:15390',
          provider: 'polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'Nodes Guru explorer',
        url: 'https://nym.explorers.guru/',
        tx_page: 'https://nym.explorers.guru/transaction/${txHash}',
        account_page: 'https://nym.explorers.guru/account/${accountAddress}'
      },
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/nyx'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/nyx',
        tx_page: 'https://www.mintscan.io/nyx/txs/${txHash}',
        account_page: 'https://www.mintscan.io/nyx/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/nyx',
        tx_page: 'https://ping.pub/nyx/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'octa',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Octa',
    chain_id: 'octa',
    bech32_prefix: 'octa',
    daemon_name: 'octadaemon',
    node_home: '$HOME/.octa',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uocta',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: '',
      recommended_version: '',
      compatible_versions: [],
      binaries: {
        'linux/amd64': '',
        'linux/arm64': '',
        'darwin/amd64': '',
        'windows/amd64': ''
      },
      genesis: {
        genesis_url:
          'https://octa-coin-assets.s3.eu-central-1.amazonaws.com/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd35844470ba3c80f052091a9c86d44198e579246',
          address: '3.73.39.110:26656'
        }
      ],
      persistent_peers: [
        {
          id: '935118052f48eede9ed7d38d3da8e20cb5747e39',
          address: '3.123.21.45:26656',
          provider: 'GenesisNode'
        },
        {
          id: '61823fb4af8a48ac161522114c6640b76fd8a6d9',
          address: '3.71.102.151:26656',
          provider: 'Basic_Validator'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://3.71.102.151:26657',
          provider: 'octa'
        }
      ],
      rest: [
        {
          address: 'http://3.71.102.151:1317',
          provider: 'octa'
        }
      ]
    },
    explorers: [
      {
        kind: 'Octa explorer',
        url: 'http://explorer.octa-coin.com/',
        tx_page: 'http://explorer.octa-coin.com/txs/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'odin',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://odinprotocol.io/',
    pretty_name: 'Odin Protocol',
    chain_id: 'odin-mainnet-freya',
    bech32_prefix: 'odin',
    daemon_name: 'odind',
    node_home: '$HOME/.odin',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'loki',
          fixed_min_gas_price: 0.0125
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ODIN-PROTOCOL/odin-core',
      recommended_version: 'v0.6.2',
      compatible_versions: ['v0.6.2'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '9d16b1ce74a34b869d69ad5fe34eaca614a36ecd',
          address: '35.241.238.207:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '02e905f49e1b869f55ad010979931b542302a9e6',
          address: '35.241.221.154:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '4847c79f1601d24d3605278a0183d416a99aa093',
          address: '34.140.252.7:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '0165cd0d60549a37abb00b6acc8227a54609c648',
          address: '34.79.179.216:26656',
          provider: 'Odin Protocol'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'odin.mainnet.peer.autostake.net:26766',
          provider: 'AutoStake.net'
        }
      ],
      seeds: [
        {
          id: 'c8ee9f66163f0c1220c586eab1a2a57f6381357f',
          address: 'odin.seed.rhinostake.com:16658',
          provider: 'Rhino Stake'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16856',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'odin.mainnet.seed.autostake.net:26766',
          provider: 'AutoStake.net'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://34.79.179.216:26657',
          provider: 'Odin Protocol'
        },
        {
          address: 'https://odin-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      rest: [
        {
          address: 'http://34.79.179.216:1317/',
          provider: 'Odin Protocol'
        },
        {
          address: 'https://odin-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      grpc: [
        {
          address: 'https://odin-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ]
    },
    explorers: [
      {
        kind: 'odin web',
        url: 'https://mainnet.odinprotocol.io/',
        tx_page: 'https://mainnet.odinprotocol.io/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/odin',
        tx_page: 'https://ping.pub/odin/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'okexchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'OKExChain',
    chain_id: 'exchain-66',
    bech32_prefix: 'ex',
    daemon_name: 'exchaind',
    node_home: '$HOME/.exchaind',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'wei',
          low_gas_price: 200000000,
          average_gas_price: 250000000,
          high_gas_price: 400000000
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/okex/exchain',
      recommended_version: 'v1.6.1.1',
      compatible_versions: ['v1.2.2', 'v1.6.1.1'],
      binaries: {},
      genesis: {
        genesis_url: 'https://github.com/okex/mainnet/blob/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'e926c8154a2af4390de02303f0977802f15eafe2',
          address: '3.16.103.80:26656',
          provider: 'Chillcrypto'
        },
        {
          id: '7fa5b1d1f1e48659fa750b6aec702418a0e75f13',
          address: '175.41.191.69:26656',
          provider: 'Unique farming'
        },
        {
          id: 'c8f32b793871b56a11d94336d9ce6472f893524b',
          address: '35.74.8.189:26656',
          provider: 'DeLab'
        }
      ],
      persistent_peers: [
        {
          id: 'bbd4aa19249ad42de4fe2ca99209894412fd4707',
          address: '3.135.138.205:26656',
          provider: 'ChainHub'
        },
        {
          id: '0eb87d4eb92f8f04d9c2d444dd403671a634af56',
          address: '13.125.38.24:26656',
          provider: 'DeLab'
        },
        {
          id: '3449bb4d2180dfaa9ddb13776177b0e67f95ebb4',
          address: '54.255.93.228:26656',
          provider: 'Chillcrypto'
        },
        {
          id: 'b2a2f799a726b74f83f73b62e1bfef017575b21a',
          address: '54.151.166.67:26656',
          provider: 'Unique farming'
        },
        {
          id: '01b21d39f250a3a5411113aae4a7032eaf9b344e',
          address: '3.64.37.17:26656',
          provider: 'Nodeplus'
        },
        {
          id: '54c195e08ff53e9fd31973dd73d530dcd1506807',
          address: '52.78.236.126:26656',
          provider: 'Blockpro'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://exchaintmrpc.okex.org',
          provider: 'okx chain'
        }
      ],
      rest: [
        {
          address: 'https://exchainrpc.okex.org/',
          provider: 'okx chain'
        }
      ]
    },
    explorers: [
      {
        kind: 'OKLink',
        url: 'https://www.oklink.com/en/okc',
        tx_page: 'https://www.oklink.com/en/okc/tx/${txHash}',
        account_page: 'https://www.oklink.com/en/okc/address/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'omniflixhub',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://omniflix.co/home',
    pretty_name: 'OmniFlix',
    chain_id: 'omniflixhub-1',
    daemon_name: 'omniflixhubd',
    node_home: '$HOME/.omniflixhub',
    bech32_prefix: 'omniflix',
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/OmniFlix/omniflixhub',
      recommended_version: 'v0.8.0',
      compatible_versions: ['v0.8.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/OmniFlix/mainnet/main/omniflixhub-1/genesis.json'
      }
    },
    fees: {
      fee_tokens: [
        {
          denom: 'uflix',
          fixed_min_gas_price: 0
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:16956',
          provider: 'RHINO'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:16956',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: '2df1f357f08049ba0c0dddfffe805f0e135e54ec',
          address: '35.247.185.216:26656'
        },
        {
          id: '6198ac4bc907f6d1a78309ef58491370afc49799',
          address: '34.124.195.219:26656'
        },
        {
          id: '574b37cc6e80663e70673cbe848147c2643ca48e',
          address: '35.240.187.174:26656'
        },
        {
          id: '8313c9d55006da030588f61806b3e056a113e6e8',
          address: '34.87.18.204:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.omniflix.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://omniflixhub-rpc.skynetvalidators.com',
          provider: 'skynet-validators'
        },
        {
          address: 'https://rpc.omniflix.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc.omniflix.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc-omniflixhub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://omniflix-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-omniflix.huginn.tech:443',
          provider: 'Huginn'
        },
        {
          address: 'https://rpc.omniflix.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://omniflix.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://api.omniflix.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://omniflixhub-api.skynetvalidators.com',
          provider: 'skynet-validators'
        },
        {
          address: 'https://api.omniflix.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api.omniflix.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api-omniflixhub-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://omniflix-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.omniflix.huginn.tech:443',
          provider: 'Huginn'
        },
        {
          address: 'https://api.omniflix.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://omniflix.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.omniflix.kingnodes.com',
          provider: 'kingnodes'
        },
        {
          address: 'https://grpc.omniflix.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'grpc-omniflixhub-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://omniflix-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.omniflix.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://omniflix.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/omniflixhub',
        tx_page: 'https://ezstaking.tools/omniflixhub/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/omniflix',
        tx_page: 'https://www.mintscan.io/omniflix/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/omniflix/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/omniflixhub',
        tx_page: 'https://atomscan.com/omniflixhub/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'onomy',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://onomy.io/',
    pretty_name: 'Onomy',
    chain_id: 'onomy-mainnet-1',
    bech32_prefix: 'onomy',
    daemon_name: 'onomyd',
    node_home: '$HOME/.onomyd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'anom',
          low_gas_price: 0,
          average_gas_price: 0.03,
          high_gas_price: 0.06
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'anom'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/onomyprotocol/onomy',
      recommended_version: 'v1.0.1',
      compatible_versions: ['v1.0.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd',
        'linux/arm64':
          'https://github.com/onomyprotocol/onomy/releases/download/v1.0.1/onomyd-arm'
      },
      cosmos_sdk_version: '0.44',
      tendermint_version: '0.34',
      ibc_go_version: '2.0.4',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '211535f9b799bcc8d46023fa180f3359afd4c1d3',
          address: '44.213.44.5:26656',
          provider: 'onomy'
        },
        {
          id: 'cd9a47cebe8eef076a5795e1b8460a8e0b2384e5',
          address: '3.210.0.126:26656',
          provider: 'onomy'
        }
      ],
      persistent_peers: [
        {
          id: 'c213f678b9e3b7c37b9229318b3e27b95c9d5af4',
          address: '52.70.182.125:26656',
          provider: 'WhisperNode 🤐'
        },
        {
          id: '00ce2f84f6b91639a7cedb2239e38ffddf9e36de',
          address: '44.195.221.88:26656',
          provider: 'cosmostation'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-mainnet.onomy.io',
          provider: 'onomy'
        }
      ],
      rest: [
        {
          address: 'https://rest-mainnet.onomy.io',
          provider: 'onomy'
        }
      ],
      grpc: [
        {
          address: 'https://grpc-mainnet.onomy.io:9090',
          provider: 'onomy'
        }
      ]
    },
    explorers: [
      {
        kind: 'Big Dipper',
        url: 'https://explorer.onomy.io',
        tx_page: 'https://explorer.onomy.io/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/onomy-protocol',
        tx_page: 'https://www.mintscan.io/onomy-protocol/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/onomy-protocol/account/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png'
    },
    keywords: ['dex', 'stablecoin', 'bridge', 'staking']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'oraichain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://orai.io/',
    pretty_name: 'Oraichain',
    chain_id: 'Oraichain',
    bech32_prefix: 'orai',
    daemon_name: 'oraid',
    node_home: '$WORKSPACE/.oraid',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'orai',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/oraichain/orai',
      recommended_version: 'v0.40.3',
      compatible_versions: ['v0.40.3'],
      binaries: {
        'linux/amd64': 'https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/mainnet-static-files/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
          address: '18.223.242.70:26656',
          provider: 'oraichain-team'
        },
        {
          id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
          address: '18.116.209.76:26656',
          provider: 'oraichain-team'
        },
        {
          id: '59d49e39d507bb190e746bcf5590d65879c132e2',
          address: '13.79.247.74:26656',
          provider: 'vaiot'
        },
        {
          id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
          address: '5.189.169.99:26656',
          provider: 'ORAI Vanguard'
        },
        {
          id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
          address: '64.225.53.108:26656',
          provider: 'oraichain-team'
        },
        {
          id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
          address: 'seed.orai.synergynodes.com:26656',
          provider: 'synergynodes'
        }
      ],
      persistent_peers: [
        {
          id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
          address: '18.223.242.70:26656'
        },
        {
          id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
          address: '18.116.209.76:26656'
        },
        {
          id: '59d49e39d507bb190e746bcf5590d65879c132e2',
          address: '13.79.247.74:26656'
        },
        {
          id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
          address: '5.189.169.99:26656'
        },
        {
          id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
          address: '64.225.53.108:26656'
        },
        {
          id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
          address: 'seed.orai.synergynodes.com:26656',
          provider: 'synergynodes'
        },
        {
          id: '8b346750e75fd584645192a65c62c7ab88741791',
          address: 'peer-oraichain.vchain.zone',
          provider: 'Vchain-team'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.orai.io',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.223.242.70:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.116.209.76:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://64.225.53.108:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://13.79.247.74:26657',
          provider: 'vaiot'
        },
        {
          address: 'https://rpc-oraichain.vchain.zone',
          provider: 'Vchain-team'
        }
      ],
      rest: [
        {
          address: 'http://lcd.orai.io',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.223.242.70:1317',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.116.209.76:1317',
          provider: 'oraichain-team'
        },
        {
          address: 'http://64.225.53.108:1317',
          provider: 'oraichain-team'
        },
        {
          address: 'https://rest-oraichain.vchain.zone',
          provider: 'Vchain-team'
        }
      ]
    },
    explorers: [
      {
        kind: 'oraiscan',
        url: 'https://scan.orai.io',
        tx_page: 'https://scan.orai.io/txs/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'osmosis',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://osmosis.zone/',
    update_link:
      'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
    pretty_name: 'Osmosis',
    chain_id: 'osmosis-1',
    bech32_prefix: 'osmo',
    daemon_name: 'osmosisd',
    node_home: '$HOME/.osmosisd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uosmo',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uosmo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/osmosis-labs/osmosis',
      recommended_version: 'v13.1.0',
      compatible_versions: ['v13.1.0', 'v13.1.1', 'v13.1.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.0/osmosisd-13.1.0-linux-amd64?checksum=sha256:50e734ee44e15c00927e4ce6c721bd79f5580f2b70cf37df52329224ad8089f0',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v13.1.0/osmosisd-13.1.0-linux-arm64?checksum=sha256:ddc45deb04e7f4b7bdaaf3263ff1cbc469f7bfc51d3c9dae5d6817cb9e3c0bd7'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.29',
      cosmwasm_enabled: true,
      ibc_go_version: '3.4.0',
      ics_enabled: ['ics20-1'],
      genesis: {
        name: 'v3',
        genesis_url:
          'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
      },
      versions: [
        {
          name: 'v3',
          tag: 'v3.1.0',
          height: 0,
          next_version_name: 'v4'
        },
        {
          name: 'v4',
          tag: 'v4.2.0',
          height: 1314500,
          next_version_name: 'v5'
        },
        {
          name: 'v5',
          tag: 'v6.4.1',
          height: 2383300,
          next_version_name: 'v7'
        },
        {
          name: 'v7',
          tag: 'v8.0.0',
          height: 3401000,
          next_version_name: 'v9'
        },
        {
          name: 'v9',
          tag: 'v10.0.1',
          height: 4707300,
          next_version_name: 'v11'
        },
        {
          name: 'v11',
          tag: 'v11.0.0',
          height: 5432450,
          next_version_name: 'v12'
        },
        {
          name: 'v12',
          tag: 'v12.3.0',
          height: 6246000,
          next_version_name: 'v13'
        },
        {
          name: 'v13',
          tag: 'v13.1.0',
          height: 7241500
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: '83adaa38d1c15450056050fd4c9763fcc7e02e2c',
          address: 'ec2-44-234-84-104.us-west-2.compute.amazonaws.com:26656',
          provider: 'notional'
        },
        {
          id: '23142ab5d94ad7fa3433a889dcd3c6bb6d5f247d',
          address: '95.217.193.163:26656',
          provider: 'notional'
        },
        {
          id: 'f82d1a360dc92d4e74fdc2c8e32f4239e59aebdf',
          address: '95.217.121.243:26656',
          provider: 'notional'
        },
        {
          id: 'e437756a853061cc6f1639c2ac997d9f7e84be67',
          address: '144.76.183.180:26656',
          provider: 'notional'
        },
        {
          id: 'f515a8599b40f0e84dfad935ba414674ab11a668',
          address: 'osmosis.blockpane.com:26656',
          provider: 'blockpane'
        },
        {
          id: '7c66126b64cd66bafd9ccfc721f068df451d31a3',
          address: 'osmosis-seed.sunshinevalidation.io:9393',
          provider: 'sunshine-validation'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12556',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12556',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'osmosis.mainnet.seed.autostake.net:26716',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '3cc024d1c760c9cd96e6413abaf3b36a8bdca58e',
          address: 'seeds.goldenratiostaking.net:1630',
          provider: 'Golden Ratio Staking'
        },
        {
          id: 'bd7064a50f5843e2c84c71c4dc18ac07424bdcc1',
          address: 'seeds.whispernode.com:12556',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'b63e1e588e8feb7e4a4adf0f2542d755e606d3f1',
          address: '5.9.105.113:26656',
          provider: 'WhisperNode 🤐'
        },
        {
          id: '8f67a2fcdd7ade970b1983bf1697111d35dfdd6f',
          address: '52.79.199.137:26656',
          provider: 'cosmostation'
        },
        {
          id: '00c328a33578466c711874ec5ee7ada75951f99a',
          address: '35.82.201.64:26656',
          provider: 'cosmostation'
        },
        {
          id: 'cfb6f2d686014135d4a6034aa6645abd0020cac6',
          address: '52.79.88.57:26656',
          provider: 'cosmostation'
        },
        {
          id: '8d9967d5f865c68f6fe2630c0f725b0363554e77',
          address: '134.255.252.173:26656',
          provider: 'divecrypto'
        },
        {
          id: '785bc83577e3980545bac051de8f57a9fd82695f',
          address: '194.233.164.146:26656',
          provider: 'forbole'
        },
        {
          id: '778fdedf6effe996f039f22901a3360bc838b52e',
          address: '161.97.187.189:36657',
          provider: 'kalpatech'
        },
        {
          id: '64d36f3a186a113c02db0cf7c588c7c85d946b5b',
          address: '209.97.132.170:26656',
          provider: 'solidstake'
        },
        {
          id: '4d9ac3510d9f5cfc975a28eb2a7b8da866f7bc47',
          address: '37.187.38.191:26656',
          provider: 'stakelab'
        },
        {
          id: '2115945f074ddb038de5d835e287fa03e32f0628',
          address: '95.217.43.85:26656',
          provider: 'stakerspace'
        },
        {
          id: 'bf2c480eff178d2647ba1adfeee8ced568fe752c',
          address: '91.65.128.44:26656',
          provider: 'stakerus'
        },
        {
          id: '2f9c16151400d8516b0f58c030b3595be20b804c',
          address: '37.120.245.167:26656',
          provider: 'syncnode'
        },
        {
          id: 'bada684070727cb3dda430bcc79b329e93399665',
          address: '173.212.240.91:26656',
          provider: 'qf3l3k'
        },
        {
          id: '3fea02d121cb24503d5fbc53216a527257a9ab55',
          address: '143.198.145.208:26656',
          provider: 'witval'
        },
        {
          id: '7de029fa5e9c1f39557c0e3523c1ae0b07c58be0',
          address: '78.141.219.223:26656',
          provider: 'artifactstaking'
        },
        {
          id: '7024d1ca024d5e33e7dc1dcb5ed08349768220b9',
          address: '134.122.42.20:26656',
          provider: 'figment'
        },
        {
          id: 'd326ad6dffa7763853982f334022944259b4e7f4',
          address: '143.110.212.33:26656',
          provider: 'figment'
        },
        {
          id: 'e7916387e05acd53d1b8c0f842c13def365c7bb6',
          address: '176.9.64.212:26666',
          provider: 'medusanode'
        },
        {
          id: '55eea69c21b46000c1594d8b4a448563b075d9e3',
          address: '34.107.19.235:26656',
          provider: 'binaryholdings'
        },
        {
          id: '9faf468b90a3b2b85ffd88645a15b3715f68bb0b',
          address: '195.201.122.100:26656',
          provider: 'chainflow'
        },
        {
          id: 'ffc82412c0261a94df122b9cc0ce1de81da5246b',
          address: '15.222.240.16:26656',
          provider: 'cephalopod'
        },
        {
          id: '5b90a530464885fd28c31f698c81694d0b4a1982',
          address: '35.183.238.70:26656',
          provider: 'cephalopod'
        },
        {
          id: '7b6689cb18d625bbc069aa99d9d5521293db442c',
          address: '51.158.97.192:26656',
          provider: 'mp20'
        },
        {
          id: 'fda06dcebe2acd17857a6c9e9a7b365da3771ceb',
          address: '52.206.252.176:26656',
          provider: 'stargaze'
        },
        {
          id: '8d9fd90a009e4b6e9572bf9a84b532a366790a1d',
          address: '193.26.156.221:26656',
          provider: 'validatus'
        },
        {
          id: '44a760a66071dae257c5c044be604219bfc3510c',
          address: '49.12.35.177:36656',
          provider: 'in3s.com'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'osmosis.mainnet.peer.autostake.net:26716',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.osmosis.zone/',
          provider: 'Osmosis Foundation'
        },
        {
          address: 'https://rpc-osmosis.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://osmosis-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://rpc-osmosis.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://osmosis-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://osmosis.validator.network/',
          provider: 'validatornetwork'
        },
        {
          address: 'https://rpc-osmosis.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://osmosis-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-osmosis-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.osmosis.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://rpc.osmosis.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://osmosis.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://osmosis.rpc.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://rpc.osmosis.goldenratiostaking.net',
          provider: 'Golden Ratio Staking'
        },
        {
          address: 'https://osmosis-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://osmosis.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rpc.osl.zone',
          provider: 'Osmosis Support Lab'
        }
      ],
      rest: [
        {
          address: 'https://lcd.osmosis.zone/',
          provider: 'Osmosis Foundation'
        },
        {
          address: 'https://osmosis-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://lcd-osmosis.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://lcd-osmosis.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://osmosis-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rest-osmosis.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-osmosis-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.osmosis.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://osmosis-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.osmosis.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://osmosis.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://osmosis.rest.stakin-nodes.com',
          provider: 'Stakin'
        },
        {
          address: 'https://osmosis-api.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://osmosis.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://api.osl.zone',
          provider: 'Osmosis Support Lab'
        },
        {
          address: 'https://osmosis.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://osmosis.stakesystems.io/',
          provider: 'stakesystems'
        }
      ],
      grpc: [
        {
          address: 'osmosis.strange.love:9090',
          provider: 'strangelove'
        },
        {
          address: 'https://osmosis-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'grpc-osmosis-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'osmosis-grpc.polkachu.com:12590',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.osmosis.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://osmosis.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'osmosis.grpc.stakin-nodes.com:443',
          provider: 'Stakin'
        },
        {
          address: 'osmosis.grpc.interchain.ivaldilabs.xyz:433',
          provider: 'Ivaldi Labs'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/osmosis',
        tx_page: 'https://ezstaking.tools/osmosis/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/osmosis',
        tx_page: 'https://www.mintscan.io/osmosis/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/osmosis/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/osmosis',
        tx_page: 'https://ping.pub/osmosis/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://osmosis.explorers.guru',
        tx_page: 'https://osmosis.explorers.guru/transaction/${txHash}',
        account_page:
          'https://osmosis.explorers.guru/transaction/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/osmosis',
        tx_page: 'https://atomscan.com/osmosis/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    },
    keywords: ['dex']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'panacea',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://medibloc.com/en/',
    pretty_name: 'Medibloc',
    chain_id: 'panacea-3',
    bech32_prefix: 'panacea',
    daemon_name: 'panacead',
    node_home: '$HOME/.panacead',
    key_algos: ['secp256k1'],
    slip44: 371,
    fees: {
      fee_tokens: [
        {
          denom: 'umed',
          fixed_min_gas_price: 5,
          low_gas_price: 5,
          average_gas_price: 7,
          high_gas_price: 9
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'umed'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/medibloc/panacea-core',
      recommended_version: 'v2.0.5',
      compatible_versions: ['v2.0.5'],
      binaries: {},
      genesis: {
        genesis_url:
          'https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: 'e93f5df69cc1b9bda230b3efcf162d4672293ded',
          address: '3.35.82.40:26656',
          provider: 'medibloc'
        },
        {
          id: '0e0db1c7ab1e37c76f2ceced0bb72e1c60ef17a6',
          address: '13.124.96.254:26656',
          provider: 'medibloc'
        },
        {
          id: 'a83232db3a40e486b54b1463a43431e8490b808b',
          address: '52.79.108.35:26656',
          provider: 'medibloc'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.gopanacea.org',
          provider: 'medibloc'
        }
      ],
      rest: [
        {
          address: 'https://api.gopanacea.org',
          provider: 'medibloc'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/medibloc',
        tx_page: 'https://www.mintscan.io/medibloc/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explorer.gopanacea.org',
        tx_page: 'https://explorer.gopanacea.org/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'passage',
    chain_id: 'passage-1',
    pretty_name: 'Passage',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://passage3d.com/',
    bech32_prefix: 'pasg',
    daemon_name: 'passage',
    node_home: '$HOME/.passage',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'upasg',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/envadiv/Passage3D',
      recommended_version: 'v1.1.0',
      compatible_versions: ['v1.1.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/envadiv/mainnet/main/passage-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'aebb8431609cb126a977592446f5de252d8b7fa1',
          address: '104.236.201.138:26656'
        },
        {
          id: 'b6beabfb9309330944f44a1686742c2751748b83',
          address: '5.161.47.163:26656'
        },
        {
          id: '7a9a36630523f54c1a0d56fc01e0e153fd11a53d',
          address: '167.235.24.145:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15656',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:15656',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'passage.mainnet.seed.autostake.net:26916',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'ecfd6a2ab8dc2b196080ff6506cd0d1c68f6f8b5',
          address: 'passage-seed.panthea.eu:40656',
          provider: 'Panthea EU'
        },
        {
          id: '2534bb8af72ab14e001a9f48b7cf9626221c6be5',
          address: 'seeds.whispernode.com:15656',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '69975e7afdf731a165e40449fcffc75167a084fc',
          address: '104.131.169.70:26656'
        },
        {
          id: 'd35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab',
          address: '116.203.182.185:26656'
        },
        {
          id: 'ffacd3202ded6945fed12fa4fd715b1874985b8c',
          address: '3.98.38.91:26656'
        },
        {
          id: '8e0b0d4f80d0d2853f853fbd6a76390113f07d72',
          address: '65.108.127.249:26656'
        },
        {
          id: '0111da7144fd2e8ce0dfe17906ef6fd760325aca',
          address: '142.132.213.231:26656'
        },
        {
          id: '55f34a3a6a48de316f778aebab7406298169ce02',
          address: '10.40.40.40:26656'
        },
        {
          id: 'a8f1ec69d4dc60481b4250966053836af6f3d39f',
          address: '167.86.99.7:26656'
        },
        {
          id: 'c51fb04ff004829736e6d3cb2c704a6c111470ea',
          address: '38.242.216.139:26656'
        },
        {
          id: '813f91ac5338de44e28aa7946039986dbec286ff',
          address: '198.244.228.17:36056'
        },
        {
          id: '9e6f10f401dadcb28a8164574147056b8e3ab748',
          address: '65.109.34.42:26656'
        },
        {
          id: 'f76ccaa550d283ef1adb55c6aca5d94eab6a1806',
          address: '146.59.81.204:24456'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'passage.mainnet.peer.autostake.net:26916',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '054b90a8dc7b392e4b1d0e3b6d09bcb2c38251cb',
          address: 'passage-peer.panthea.eu:30656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.passage.vitwit.com',
          provider: 'vitwit'
        },
        {
          address: 'https://rpc.passage.blockscope.net:26657',
          provider: 'blockscope'
        },
        {
          address: 'https://services.staketab.com/passage-rpc',
          provider: 'staketab'
        },
        {
          address: 'https://rpc-passage.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://passage-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc-passage-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.passage.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://passage-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://passage-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc-passage.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://passage-rpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://api.passage.vitwit.com',
          provider: 'vitwit'
        },
        {
          address: 'https://services.staketab.com/passage-api',
          provider: 'staketab'
        },
        {
          address: 'https://rest-passage.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://passage-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api-passage-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.passage.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://passage-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://passage-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://api-passage.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://passage-api.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://passage.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-passage-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://passage-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'passage-grpc.polkachu.com:15690',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.passage.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-passage.d-stake.xyz',
          provider: 'D-stake'
        }
      ]
    },
    explorers: [
      {
        kind: 'aneka',
        url: 'https://passage.aneka.io',
        tx_page: 'https://passage.aneka.io/txs/${txHash}',
        account_page: 'https://passage.aneka.io/accounts/${accountAddress}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/passage',
        tx_page: 'https://www.mintscan.io/passage/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/passage/account/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'persistence',
    chain_id: 'core-1',
    pretty_name: 'Persistence',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://persistence.one/',
    bech32_prefix: 'persistence',
    daemon_name: 'persistenceCore',
    node_home: '$HOME/.persistenceCore',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uxprt',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uxprt'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/persistenceOne/persistenceCore',
      recommended_version: 'v6.1.0',
      compatible_versions: ['v6.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/persistenceOne/persistenceCore/releases/download/v5.0.0/persistenceCore-linux-amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '449a0f1b7dafc142cf23a1f6166bbbf035edfb10',
          address: '13.232.85.66:26656'
        },
        {
          id: 'eaa76966cad27a9807b7d8b9a62c9b2ca4924581',
          address: 'tenderseed.ccvalidators.com:26003'
        },
        {
          id: 'c16799ee5a236e08b1e49df62a545cf55d976dab',
          address: 'seed-persistence.starsquid.io:15607',
          provider: 'Starsquid'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'persistence.mainnet.seed.autostake.net:26896',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15456',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: '876946a947850952383347724206d067d7032b22',
          address: '3.137.86.151:26656'
        },
        {
          id: 'ecc00c5a7abd057ea5ca4a94c48d1d937bbab34a',
          address: '34.118.19.56:26656'
        },
        {
          id: 'ac7e6aab726e842b92c06b8ebbf5a3616872ee80',
          address: '128.1.133.107:26656'
        },
        {
          id: 'b9dab7a1a5ffd16d43b19e40a8020db84e8dfffd',
          address: '3.14.116.246:44456'
        },
        {
          id: '60385a36ea72a2985bd8450c95b8df8be2adebb8',
          address: '54.95.235.242:26656'
        },
        {
          id: 'a92ff1da2020e5cbc9b05527e9e39c34a84e8a27',
          address: '34.72.57.218:26656'
        },
        {
          id: 'e15524629aee25fea01f62d26c4e062bfda94b70',
          address: '35.247.171.7:26656'
        },
        {
          id: '7c106099b8d07085431a97387e5a5db2d1ecd71d',
          address: '18.223.209.36:26656'
        },
        {
          id: 'b19a3cf4d9938b41539729d027bf2e3c1a4e1fbb',
          address: '85.214.130.157:26656'
        },
        {
          id: '7cc92a9e3dcad37e5e7b3adf7814c37070fa9787',
          address: '161.97.187.189:26656'
        },
        {
          id: '7b9839cd3e994c44cbd747d1ddc51ee695f60e58',
          address: '157.90.134.48:26656'
        },
        {
          id: 'cfb529bd0325fc884296518655f1f315bc42dd0c',
          address: '185.144.83.165:26656'
        },
        {
          id: '01102f3c84e6602e30e1e39498e242cbb60a0b73',
          address: '178.62.103.7:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'persistence.mainnet.peer.autostake.net:26896',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '137818b03a705cf86622b4d97a074091f2f22589',
          address: '185.225.233.30:26756',
          provider: 'Cosmonaut Stakes'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.core.persistence.one',
          provider: 'Persistence'
        },
        {
          address: 'https://rpc-persistent-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-persistence.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://persistence-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://persistence-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-persistence.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://persistence-mainnet-rpc.cosmonautstakes.com',
          provider: 'Cosmonaut Stakes'
        },
        {
          address: 'https://persistence-rpc.quantnode.tech',
          provider: 'QuantNode'
        },
        {
          address: 'https://persistence-rpc.zenscape.one',
          provider: 'Zenscape'
        }
      ],
      rest: [
        {
          address: 'https://rest.core.persistence.one',
          provider: 'Persistence'
        },
        {
          address: 'https://api-persistent-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api-persistence.starsquid.io',
          provider: 'Starsquid'
        },
        {
          address: 'https://persistence-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://persistence-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rest-persistence.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://persistence.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://persistence-mainnet-rest.cosmonautstakes.com',
          provider: 'Cosmonaut Stakes'
        },
        {
          address: 'https://persistence-lcd.quantnode.tech',
          provider: 'QuantNode'
        },
        {
          address: 'https://persistence-rest.zenscape.one',
          provider: 'Zenscape'
        }
      ],
      grpc: [
        {
          address: 'grpc.core.persistence.one:443',
          provider: 'Persistence'
        },
        {
          address: 'grpc-persistent-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'persistence-grpc.polkachu.com:15490',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/persistence',
        tx_page: 'https://www.mintscan.io/persistence/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/persistence/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/persistence',
        tx_page: 'https://ping.pub/persistence/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/persistence',
        tx_page: 'https://atomscan.com/persistence/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'planq',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://planq.network/',
    pretty_name: 'Planq',
    chain_id: 'planq_7070-2',
    bech32_prefix: 'plq',
    node_home: '$HOME/.planqd',
    daemon_name: 'planqd',
    key_algos: ['ethsecp256k1'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aplanq',
          fixed_min_gas_price: 20000000000,
          low_gas_price: 20000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'aplanq'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/planq-network/planq',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/planq-network/planq/releases/download/v1.0.0/planq_v1.0.0-next_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/planq-network/planq/releases/download/v1.0.0/planq_v1.0.0-next_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/planq-network/planq/releases/download/v1.0.0/planq_v1.0.0-next_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/planq-network/planq/releases/download/v1.0.0/planq_v1.0.0-next_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/planq-network/planq/releases/download/v1.0.0/planq_v1.0.0-next_Windows_x86_64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/planq-network/networks/main/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'dd2f0ceaa0b21491ecae17413b242d69916550ae',
          address: '135.125.247.70:26656',
          provider: 'Planq Foundation EU'
        },
        {
          id: '0525de7e7640008d2a2e01d1a7f6456f28f3324c',
          address: '51.79.142.6:26656',
          provider: 'Planq Foundation SG'
        },
        {
          id: '21432722b67540f6b366806dff295849738d7865',
          address: '139.99.223.241:26656',
          provider: 'Planq Foundation AU'
        }
      ],
      persistent_peers: [
        {
          id: 'dd2f0ceaa0b21491ecae17413b242d69916550ae',
          address: '135.125.247.70:26656',
          provider: 'Planq Foundation EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.planq.network',
          provider: 'planq.network'
        },
        {
          address: 'https://rpc.planq.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-planq.comunitynode.my.id',
          provider: 'ComunityNode'
        }
      ],
      rest: [
        {
          address: 'https://rest.planq.network',
          provider: 'planq.network'
        },
        {
          address: 'https://api.planq.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-planq.comunitynode.my.id',
          provider: 'ComunityNode'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.planq.network',
          provider: 'planq.network'
        },
        {
          address: 'https://grpc.planq.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm-rpc.planq.network',
          provider: 'planq.network'
        },
        {
          address: 'https://jsonrpc.planq.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explorer.planq.network',
        tx_page: 'https://explorer.planq.network/transactions/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://evm.planq.network',
        tx_page: 'https://evm.planq.network/tx/${txHash}'
      },
      {
        kind: 'NodeStake Explorer',
        url: 'https://explorer.nodestake.top/planq',
        tx_page: 'https://explorer.nodestake.top/planq/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'point',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Point Network',
    chain_id: 'point_10687-1',
    bech32_prefix: 'point',
    node_home: '$HOME/.pointd',
    daemon_name: 'pointd',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'apoint',
          low_gas_price: 5000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'apoint'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/pointnetwork/point-chain',
      recommended_version: 'v8.0.0',
      compatible_versions: ['v8.0.0'],
      binaries: {
        'linux/amd64': '',
        'linux/arm64': '',
        'darwin/amd64': '',
        'darwin/arm64': '',
        'windows/amd64': ''
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '8673c1f04c29c464189e8bf29e51fb0b38da2f19',
          address: 'rpc-mainnet-1.point.space:26656',
          provider: 'Point Network'
        }
      ],
      persistent_peers: [
        {
          id: '8673c1f04c29c464189e8bf29e51fb0b38da2f19',
          address: 'rpc-mainnet-1.point.space:26656',
          provider: 'Point Network'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-mainnet-1.point.space:26657',
          provider: 'Point Network'
        },
        {
          address: 'https://rpc.point.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://rpc-mainnet-1.point.space:1317',
          provider: 'Point Network'
        },
        {
          address: 'https://api.point.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://rpc-mainnet-1.point.space:9090',
          provider: 'Point Network'
        },
        {
          address: 'https://grpc.point.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://rpc-mainnet-1.point.space',
          provider: 'Point Network'
        },
        {
          address: 'https://jsonrpc.point.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'blockscout',
        url: 'https://explorer.pointnetwork.io/',
        tx_page: 'https://explorer.pointnetwork.io/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://cosmos.pointnetwork.io/',
        tx_page: 'https://cosmos.pointnetwork.io/point/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'provenance',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://provenance.io/',
    pretty_name: 'Provenance',
    chain_id: 'pio-mainnet-1',
    bech32_prefix: 'pb',
    daemon_name: 'provenanced',
    node_home: '$HOME/Provenance',
    key_algos: ['secp256k1'],
    slip44: 505,
    fees: {
      fee_tokens: [
        {
          denom: 'nhash',
          fixed_min_gas_price: 1905,
          low_gas_price: 1905,
          average_gas_price: 2100,
          high_gas_price: 2500
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'nhash'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/provenance-io/provenance',
      recommended_version: 'v1.8.2',
      compatible_versions: ['v1.7.5', 'v1.7.6', 'v1.8.0', 'v1.8.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/provenance-io/provenance/releases/download/v1.8.2/provenance-linux-amd64-v1.8.2.zip',
        'darwin/amd64':
          'https://github.com/provenance-io/provenance/releases/download/v1.8.2/provenance-darwin-amd64-v1.8.2.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '4bd2fb0ae5a123f1db325960836004f980ee09b4',
          address: 'seed-0.provenance.io:26656',
          provider: 'figure'
        },
        {
          id: '048b991204d7aac7209229cbe457f622eed96e5d',
          address: 'seed-1.provenance.io:26656',
          provider: 'figure'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.provenance.io/',
          provider: 'figure'
        },
        {
          address: 'https://rpc-provenance-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.provenance.io',
          provider: 'figure'
        },
        {
          address: 'https://api-provenance-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-provenance-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'provenance',
        url: 'https://explorer.provenance.io',
        tx_page: 'https://explorer.provenance.io/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://bigdipper.provenance.io',
        tx_page: 'https://bigdipper.provenance.io/transactions/${txHash}'
      },
      {
        kind: 'hubble',
        url: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1',
        tx_page:
          'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/provenance',
        tx_page: 'https://ping.pub/provenance/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/provenance',
        tx_page: 'https://www.mintscan.io/provenance/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/provenance/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/provenance',
        tx_page: 'https://atomscan.com/provenance/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'quicksilver',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://quicksilver.zone/',
    pretty_name: 'Quicksilver',
    chain_id: 'quicksilver-2',
    daemon_name: 'quicksilverd',
    node_home: '$HOME/.quicksilverd',
    bech32_prefix: 'quick',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uqck',
          fixed_min_gas_price: 0.0001
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uqck'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ingenuity-build/quicksilver',
      recommended_version: 'v1.2.0',
      compatible_versions: ['v1.2.0'],
      cosmos_sdk_version: '0.46',
      tendermint_version: '0.34',
      cosmwasm_version: '0.29',
      cosmwasm_enabled: true,
      ibc_go_version: '5.2.0',
      genesis: {
        genesis_url:
          'https://github.com/ingenuity-build/mainnet/raw/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '940c0dc153b0e344de6368d101a97fd4d9e69eff',
          address: 'seeds.cros-nest.com:25656',
          provider: 'Cros-Nest'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:11156',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:11156',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:11156',
          provider: 'rhinostake'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'quicksilver.mainnet.seed.autostake.net:27026',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'quicksilver.mainnet.peer.autostake.net:27026',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.quicksilver.zone:443',
          provider: 'Quicksilver'
        },
        {
          address: 'https://rpc-quicksilver-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://quicksilver-rpc.jambulmerah.dev:443',
          provider: 'JambulMerah'
        },
        {
          address: 'https://rpc-quicksilver.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://quicksilver-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://m-quicksilver.rpc.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://rpc-quicksilver.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://quicksilver-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      rest: [
        {
          address: 'http://lcd.quicksilver.zone:443/',
          provider: 'Quicksilver'
        },
        {
          address: 'https://api-quicksilver-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://quicksilver-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://quicksilver-api.jambulmerah.dev',
          provider: 'JambulMerah'
        },
        {
          address: 'https://api-quicksilver.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://m-quicksilver.api.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://api-quicksilver.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://quicksilver.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://quicksilver-api.ibs.team',
          provider: 'Inter Blockchain Services'
        }
      ],
      grpc: [
        {
          address: 'grpc-quicksilver-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'quicksilver-grpc.jambulmerah.dev:9090',
          provider: 'JambulMerah'
        },
        {
          address: 'https://quicksilver-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc-quicksilver.d-stake.xyz',
          provider: 'D-Stake'
        },
        {
          address: 'https://grpc-quicksilver.nodeist.net',
          provider: 'Nodeist'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/quicksilver',
        tx_page: 'https://www.mintscan.io/quicksilver/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/quicksilver/account/${accountAddress}'
      },
      {
        kind: 'UTSA explorer',
        url: 'https://exp.utsa.tech/quicksilver',
        tx_page: 'https://exp.utsa.tech/quicksilver/tx/${txHash}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/M-Quicksilver',
        tx_page: 'https://exp.nodeist.net/M-Quicksilver/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'rebus',
    website: 'https://www.rebuschain.com/',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Rebus',
    chain_id: 'reb_1111-1',
    bech32_prefix: 'rebus',
    daemon_name: 'rebusd',
    node_home: '$HOME/.rebusd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'arebus',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'arebus'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/rebuschain/rebus.core',
      recommended_version: 'v0.2.3',
      compatible_versions: ['v0.2.0'],
      versions: [
        {
          name: 'v0.1.2',
          tag: 'v0.1.2',
          height: 0,
          next_version_name: 'v0.2.3'
        },
        {
          name: 'v0.2.3',
          tag: 'v0.2.3',
          height: 473400
        }
      ],
      genesis: {
        genesis_url:
          'https://github.com/rebuschain/rebus.mainnet/raw/master/reb_1111-1/genesis.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: 'f339d2999792b360797d4e22dfd40c0ea4b7402e',
          address: '51.68.173.153:26656'
        },
        {
          id: '718706d1a1e93c2fe9a3059588236cf96c457ff4',
          address: 'seed.rebus.cros-nest.com:26656'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:17256',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'rebus.mainnet.seed.autostake.net:26906',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f',
          address: 'rebus-seed.p2p.brocha.in:30548',
          provider: 'Brochain'
        },
        {
          id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
          address: 'rebus.rpc.kjnodes.com:21659',
          provider: 'kjnodes'
        }
      ],
      persistent_peers: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'rebus.mainnet.peer.autostake.net:26906',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://api.rebuschain.com:26657/',
          provider: 'Rebuschain'
        },
        {
          address: 'https://rebus.rpc.manticore.team:443/',
          provider: 'MantiCore'
        },
        {
          address: 'https://rpc.rebus.nodestake.top/',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-1.rebus.nodes.guru',
          provider: 'Nodes.Guru'
        },
        {
          address: 'https://api.mainnet.rebus.money:26657',
          provider: 'Rebuschain'
        },
        {
          address: 'https://rpc-rebus.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://rpc-rebus.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rebus-rpc.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://rebus.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rebus.rpc.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://rpc.rebus.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://rebus-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc-rebus.huginn.tech',
          provider: 'Huginn'
        },
        {
          address: 'https://rpc.rebus.rektdao.club',
          provider: 'rektDAO'
        }
      ],
      rest: [
        {
          address: 'https://api.rebuschain.com:1317/',
          provider: 'Rebuschain'
        },
        {
          address: 'https://rebus.api.manticore.team:443/',
          provider: 'MantiCore'
        },
        {
          address: 'https://api.rebus.nodestake.top/',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-1.rebus.nodes.guru',
          provider: 'Nodes.Guru'
        },
        {
          address: 'https://api.mainnet.rebus.money:1317',
          provider: 'Rebuschain'
        },
        {
          address: 'https://api-rebus.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://api-rebus.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rebus-rest.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://rebus.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rebus.api.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://api.rebus.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://rebus-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://api.rebus.huginn.tech',
          provider: 'Huginn'
        },
        {
          address: 'https://api.rebus.rektdao.club',
          provider: 'rektDAO'
        },
        {
          address: 'https://rebus.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'https://rebus.grpc.manticore.team:443/',
          provider: 'MantiCore'
        },
        {
          address: 'https://grpc.rebus.nodestake.top/',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-rebus.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://grpc-rebus.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rebus.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://rebus-grpc.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://grpc.rebus.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorers.guru',
        url: 'https://rebus.explorers.guru',
        tx_page: 'https://rebus.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'NodeStake',
        url: 'https://explorer.nodestake.top/rebus',
        tx_page: 'https://explorer.nodestake.top/rebus/tx/${txHash}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/M-Rebus',
        tx_page: 'https://exp.nodeist.net/M-Rebus/tx/${txHash}'
      },
      {
        kind: 'Brochain',
        url: 'https://explorer.brocha.in/rebus',
        tx_page: 'https://explorer.brocha.in/rebus/tx/${txHash}'
      },
      {
        kind: 'tcnetwork',
        url: 'https://rebus.tcnetwork.io',
        tx_page: 'https://rebus.tcnetwork.io/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'regen',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.regen.network/',
    pretty_name: 'Regen',
    chain_id: 'regen-1',
    bech32_prefix: 'regen',
    daemon_name: 'regen',
    node_home: '$HOME/.regen',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uregen'
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uregen'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/regen-network/regen-ledger',
      recommended_version: 'v4.0.0',
      compatible_versions: ['v4.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_linux_amd64.zip',
        'linux/arm64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_linux_arm64.zip',
        'darwin/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_darwin_amd64.zip',
        'darwin/arm64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_darwin_arm64.zip',
        'windows/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_windows_amd64.zip'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'aebb8431609cb126a977592446f5de252d8b7fa1',
          address: '104.236.201.138:26656'
        },
        {
          id: 'd309774e794b111a0fa2056f40aed9d488b6195e',
          address: 'regen-seed.sunshinevalidation.io:32064',
          provider: 'sunshine-validation'
        }
      ],
      persistent_peers: [
        {
          id: '69975e7afdf731a165e40449fcffc75167a084fc',
          address: '104.131.169.70:26656'
        },
        {
          id: 'd35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab',
          address: '116.203.182.185:26656'
        },
        {
          id: 'ffacd3202ded6945fed12fa4fd715b1874985b8c',
          address: '3.98.38.91:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-regen.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'http://public-rpc.regen.vitwit.com:26657',
          provider: 'vitwit'
        },
        {
          address: 'https://regen.stakesystems.io:2053',
          provider: 'stakesystems'
        },
        {
          address: 'http://rpc.regen.forbole.com:80',
          provider: 'forbole'
        },
        {
          address: 'https://rpc-regen-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'regen.stakesystems.io:2083',
          provider: 'stakesystems'
        },
        {
          address: 'grpc-regen-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://rest-regen.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'http://public-rpc.regen.vitwit.com:1317',
          provider: 'vitwit'
        },
        {
          address: 'https://regen.stakesystems.io',
          provider: 'stakesystems'
        },
        {
          address: 'https://api-regen-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/regen',
        tx_page: 'https://www.mintscan.io/regen/txs/${txHash}',
        account_page: 'https://www.mintscan.io/regen/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/regen',
        tx_page: 'https://ping.pub/regen/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://regen.bigdipper.live/',
        tx_page: 'https://regen.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/regen-network',
        tx_page: 'https://atomscan.com/regen-network/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'rizon',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://rizon.world/',
    pretty_name: 'Rizon',
    chain_id: 'titan-1',
    bech32_prefix: 'rizon',
    daemon_name: 'rizond',
    node_home: '$HOME/.rizon',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uatolo',
          low_gas_price: 0.025,
          average_gas_price: 0.025,
          high_gas_price: 0.035
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uatolo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/rizon-world/rizon',
      recommended_version: 'v0.4.1',
      compatible_versions: ['v0.4.1'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/rizon-world/mainnet/master/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '83c9cdc2db2b4eff4acc9cd7d664ad5ae6191080',
          address: 'seed-1.mainnet.rizon.world:26656'
        },
        {
          id: 'ae1476777536e2be26507c4fbcf86b67540adb64',
          address: 'seed-2.mainnet.rizon.world:26656'
        },
        {
          id: '8abf316257a264dc8744dee6be4981cfbbcaf4e4',
          address: 'seed-3.mainnet.rizon.world:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://seed-1.mainnet.rizon.world:26657',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://rpcapi.rizon.world/',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://rpc.rizon.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rizon-rpc.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rizon.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'http://seed-1.mainnet.rizon.world:1317',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://restapi.rizon.world/',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://api.rizon.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rizon-api.ibs.team/',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rizon.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://rizon.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/rizon',
        tx_page: 'https://ezstaking.tools/rizon/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/rizon',
        tx_page: 'https://www.mintscan.io/rizon/txs/${txHash}',
        account_page: 'https://www.mintscan.io/rizon/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/rizon',
        tx_page: 'https://ping.pub/rizon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/rizon',
        tx_page: 'https://atomscan.com/rizon/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'secretnetwork',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://scrt.network/',
    pretty_name: 'Secret Network',
    chain_id: 'secret-4',
    bech32_prefix: 'secret',
    daemon_name: 'secretd',
    node_home: '$HOME/.secretd',
    key_algos: ['secp256k1'],
    slip44: 529,
    fees: {
      fee_tokens: [
        {
          denom: 'uscrt',
          fixed_min_gas_price: 0.00125
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uscrt'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/scrtlabs/SecretNetwork',
      recommended_version: 'v1.6',
      binaries: {
        'linux/amd64':
          'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.6/secretnetwork_1.6_mainnet_goleveldb_amd64.deb'
      },
      compatible_versions: ['v1.5'],
      genesis: {
        genesis_url:
          'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json'
      },
      versions: [
        {
          name: 'v1.2',
          tag: 'v1.2',
          height: 0,
          next_version_name: 'v1.3'
        },
        {
          name: 'v1.3',
          tag: 'v1.3',
          height: 3343000,
          next_version_name: 'v1.4'
        },
        {
          name: 'v1.4',
          tag: 'v1.4',
          height: 5309200,
          next_version_name: 'v1.5'
        },
        {
          name: 'v1.5',
          tag: 'v1.5',
          height: 5941700,
          next_version_name: 'v1.6'
        },
        {
          name: 'v1.6',
          tag: 'v1.6',
          height: 6537300,
          next_version_name: 'v1.7'
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: '6fb7169f7630da9468bf7cc0bcbbed1eb9ed0d7b',
          address: 'scrt-seed-01.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        },
        {
          id: 'ab6394e953e0b570bb1deeb5a8b387aa0dc6188a',
          address: 'scrt-seed-02.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        },
        {
          id: '9cdaa5856e0245ecd73bd464308fb990fbc53b57',
          address: 'scrt-seed-03.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:17156',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'secret.mainnet.seed.autostake.net:26656',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'd6a6edd7d3d04b59955e135e2d27b7dcc285ead7',
          address: 'seeds.whispernode.com:17156',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'secret.mainnet.peer.autostake.net:26656',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.scrt.network',
          provider: 'SCRT Network'
        },
        {
          address: 'https://secret-4.api.trivium.network:26657',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'https://scrt-rpc.blockpane.com',
          provider: '[ block pane ]'
        },
        {
          address: 'https://secret-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://secret.rpc.consensus.one',
          provider: 'Consensus One'
        },
        {
          address: 'https://rpc.secret.forbole.com/',
          provider: 'Forbole'
        },
        {
          address: 'https://secretnetwork-rpc.stakely.io',
          provider: 'Stakely.io'
        },
        {
          address: 'https://rpc-secret.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://scrt-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      rest: [
        {
          address: 'https://api.scrt.network',
          provider: 'SCRT Network'
        },
        {
          address: 'https://secret-4.api.trivium.network:1317',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'https://secret-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://scrt-lcd.blockpane.com',
          provider: '[ block pane ]'
        },
        {
          address: 'https://secret.api.consensus.one',
          provider: 'Consensus One'
        },
        {
          address: 'https://api.secret.forbole.com/',
          provider: 'Forbole'
        },
        {
          address: 'https://secretnetwork-lcd.stakely.io',
          provider: 'Stakely.io'
        },
        {
          address: 'https://secret.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://lcd-secret.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://scrt-lcd.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      'grpc-web': [
        {
          address: 'https://secret-4.api.trivium.network:9091',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'http://scrt-rpc.blockpane.com:9091',
          provider: '[ block pane ]'
        }
      ],
      grpc: [
        {
          address: 'https://secret-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://scrt-grpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ],
      wss: [
        {
          address: 'wss://scrt-rpc.agoranodes.com',
          provider: 'AgoraNodes'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/secretnetwork',
        tx_page: 'https://ezstaking.tools/secretnetwork/txs/${txHash}'
      },
      {
        kind: 'secret nodes',
        url: 'https://secretnodes.com/secret/chains/secret-4',
        tx_page:
          'https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/secret',
        tx_page: 'https://ping.pub/secret/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/secret',
        tx_page: 'https://www.mintscan.io/secret/txs/${txHash}',
        account_page: 'https://www.mintscan.io/secret/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/secret-network',
        tx_page: 'https://atomscan.com/secret-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sentinel',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://sentinel.co/',
    pretty_name: 'Sentinel',
    chain_id: 'sentinelhub-2',
    bech32_prefix: 'sent',
    daemon_name: 'sentinelhub',
    node_home: '$HOME/.sentinelhub',
    slip44: 118,
    key_algos: ['secp256k1'],
    fees: {
      fee_tokens: [
        {
          denom: 'udvpn'
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'udvpn'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/sentinel-official/hub',
      recommended_version: 'v0.6.2',
      compatible_versions: ['v0.6.2'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: 'c3aa0ff9b3eb17be1b0a26d7c8a5683e8e528e1a',
          address: '159.89.192.105:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'sentinel.mainnet.seed.autostake.net:26706',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '1a409560619766355f818ef2e42c935453782635',
          address: 'seeds.whispernode.com:17256',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '05fe2a7847fd27345250915fd06752c424f40651',
          address: '85.222.234.135:26656'
        },
        {
          id: '387027e3b1180d3a619cbbf3462704a490785963',
          address: '54.176.90.228:26656'
        },
        {
          id: '63bd9cfce0f0d274aad5b166dd06d829021aec43',
          address: '121.78.247.243:56656'
        },
        {
          id: '855807cc6a919c22ec943050ebb5c80b23724ed0',
          address: '3.239.11.246:26656'
        },
        {
          id: '8caefbf8f4318ecc93f2c901cf11470e4a16c818',
          address: '161.97.135.122:26656'
        },
        {
          id: '9174af5f16f74660cccf49f893d243949af45f7f',
          address: '54.177.29.46:26656'
        },
        {
          id: '9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123',
          address: '142.93.72.221:26656'
        },
        {
          id: 'a77f6a094578dad899e2f40e0626b4c6d4705311',
          address: '3.36.165.232:26656'
        },
        {
          id: 'bd45a11390d16d128a9eeea3935b53d7a1a3c120',
          address: '15.236.127.69:26656'
        },
        {
          id: 'cdb8dd7628460a546ce1594ca0bc0c20366514cf',
          address: '34.72.64.178:26656'
        },
        {
          id: 'd1efceccb04ded9a604e5235f76da86872157d68',
          address: '161.97.149.223:26656'
        },
        {
          id: 'e00b23444cc8dbb353d5faa765ab36cfc0116b57',
          address: '83.60.98.134:28685'
        },
        {
          id: 'e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5',
          address: '157.90.117.58:26656'
        },
        {
          id: 'f7ceb735606f90df7eb6cd987641876955b6e325',
          address: '46.4.55.150:36656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'sentinel.mainnet.peer.autostake.net:26706',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-sentinel-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-sentinel.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-sentinel.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://rpc.sentinel1.badgerbite.xyz',
          provider: 'BadgerBite'
        },
        {
          address: 'https://rpc.sentinel.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://rpc.sentinel.freak12techno.io/',
          provider: 'freak12techno'
        }
      ],
      rest: [
        {
          address: 'https://api-sentinel-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd-sentinel.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://lcd-sentinel.whispernode.com',
          provider: 'WhisperNode🤐'
        },
        {
          address: 'https://api.sentinel.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://api.sentinel.freak12techno.io/',
          provider: 'freak12techno'
        },
        {
          address: 'https://sentinel.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-sentinel-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://sentinel.grpcui.chaintools.host/',
          provider: 'ChainTools'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/sentinel',
        tx_page: 'https://www.mintscan.io/sentinel/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/sentinel/account/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'shareledger',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.sharering.network/',
    pretty_name: 'Shareledger',
    chain_id: 'ShareRing-VoyagerNet',
    bech32_prefix: 'shareledger',
    daemon_name: 'shareledger',
    node_home: '$HOME/.shareledger',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'nshr',
          fixed_min_gas_price: 0,
          low_gas_price: 2000,
          average_gas_price: 3000,
          high_gas_price: 4000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'nshr'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ShareRing/Shareledger/',
      recommended_version: '1.4.1',
      compatible_versions: ['1.4.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true,
      ibc_go_version: '3.0.0',
      ics_enabled: ['ics20-1'],
      genesis: {
        name: 'v1',
        genesis_url:
          'https://github.com/ShareRing/Shareledger/releases/download/v1.2.0/genesis.json'
      },
      versions: [
        {
          name: 'v1',
          tag: 'v1.2.0',
          height: 4382920,
          next_version_name: 'v2'
        },
        {
          name: 'v2',
          tag: 'v1.3.0',
          height: 6905000,
          next_version_name: 'v3'
        },
        {
          name: 'v3',
          tag: 'v1.4.0',
          height: 7325550,
          next_version_name: 'v4'
        },
        {
          name: 'v4',
          tag: 'v1.4.1',
          height: 7507600,
          next_version_name: 'v5'
        }
      ]
    },
    peers: {
      seeds: [
        {
          id: '1877cddbd4f1e5c6d1d33106667a69ec31eeb281',
          address: '192.168.194.50:26656'
        },
        {
          id: 'f42ed8ada782a66d89d4f12784990b562f78376a',
          address: '192.168.194.75:26656'
        },
        {
          id: '6f9ac0fd8f3341fe2342c378d8d31b1291db1661',
          address: '192.168.194.22:26656'
        },
        {
          id: '02d3c76619687479d3d038d96fe36a472bd834f9',
          address: '192.168.194.64:26656'
        },
        {
          id: 'b916ca079551cc638149123a1621f98b113090e7',
          address: '192.168.194.230:26656'
        },
        {
          id: 'f3018717656d99d66d5a38b62fee2d5cb1663fbf',
          address: '192.168.194.232:26656'
        },
        {
          id: '183748b5ff4c2e8fa7a832ac5ffe2e662b7052f1',
          address: '192.168.194.231:26656'
        },
        {
          id: 'd15a915ebe511516a7b3fe324b9efd12af0d5550',
          address: '192.168.194.185:26656'
        },
        {
          id: '45bece57c460890aac44ee6e70c3f745fe019dc6',
          address: '192.168.194.136:26656'
        },
        {
          id: '717741f841dd22370b772a05ab26362b07b4f16c',
          address: '192.168.194.101:26656'
        },
        {
          id: '1b0a92dc461a5c5a3e6294c22e17fc30da08c16a',
          address: '192.168.194.53:26656'
        },
        {
          id: '69fd2d16de0c0b07a4be36838d7678c6734ace8c',
          address: '192.168.194.109:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.explorer.shareri.ng',
          provider: 'ShareRing'
        }
      ],
      rest: [
        {
          address: 'https://lcd.explorer.shareri.ng/',
          provider: 'ShareRing'
        }
      ],
      grpc: [
        {
          address: 'https://rpc.explorer.shareri.ng',
          provider: 'ShareRing'
        }
      ]
    },
    explorers: [
      {
        kind: 'big dipper',
        url: 'https://explorer.shareri.ng',
        tx_page: 'https://explorer.shareri.ng/transactions/${txHash}',
        account_page: 'https://explorer.shareri.ng/accounts/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png'
    },
    keywords: ['id']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'shentu',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.shentu.technology/',
    pretty_name: 'Shentu',
    chain_id: 'shentu-2.2',
    bech32_prefix: 'certik',
    daemon_name: 'certik',
    node_home: '$HOME/.certik',
    key_algos: ['secp256k1'],
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/ShentuChain/shentu',
      recommended_version: 'v2.4.0',
      compatible_versions: ['v2.4.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0.linux_amd64',
        'darwin/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0_arm64_macos',
        'windows/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0_win_x86_64.exe'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '3fddc0e55801f89f27a1644116e9ddb16a951e80',
          address: '3.80.87.219:26656',
          provider: 'Shentu'
        },
        {
          id: '4814cb067fe0aef705c4d304f0caa2362b7c4246',
          address: '54.167.122.47:26656',
          provider: 'Shentu'
        },
        {
          id: 'f42be55f76b7d3425f493e54d043e65bfc6f43cb',
          address: '54.227.66.150:26656',
          provider: 'Shentu'
        },
        {
          id: '6efbe63017c90cb3e52ae78ba1014ec66516d08c',
          address: 'seed-shentu.starsquid.io:15604',
          provider: 'Starsquid'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14056',
          provider: 'Polkachu'
        },
        {
          id: '3edd4e16b791218b623f883d04f8aa5c3ff2cca6',
          address: 'shentu-seed.panthea.eu:36656',
          provider: 'Panthea EU'
        }
      ],
      persistent_peers: [
        {
          id: '3fddc0e55801f89f27a1644116e9ddb16a951e80',
          address: '3.80.87.219:26656',
          provider: 'Shentu'
        },
        {
          id: '4814cb067fe0aef705c4d304f0caa2362b7c4246',
          address: '54.167.122.47:26656',
          provider: 'Shentu'
        },
        {
          id: 'f42be55f76b7d3425f493e54d043e65bfc6f43cb',
          address: '54.227.66.150:26656',
          provider: 'Shentu'
        },
        {
          id: '207c47bed435e4174844064ef3f51ca35b059de2',
          address: 'shentu-peer.panthea.eu:26656',
          provider: 'Panthea EU'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://shenturpc.noopsbycertik.com/',
          provider: 'Shentu'
        },
        {
          address: 'https://shentu-rpc.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://certik-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-shentu.starsquid.io',
          provider: 'Starsquid'
        }
      ],
      rest: [
        {
          address: 'https://chainfull.noopsbycertik.com/',
          provider: 'Shentu'
        },
        {
          address: 'https://shentu-api.panthea.eu',
          provider: 'Panthea EU'
        },
        {
          address: 'https://certik-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-shentu.starsquid.io',
          provider: 'Starsquid'
        }
      ],
      grpc: [
        {
          address: 'certik-grpc.polkachu.com:14090',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/shentu',
        tx_page: 'https://ezstaking.tools/shentu/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/shentu',
        tx_page: 'https://www.mintscan.io/shentu/txs/${txHash}',
        account_page: 'https://www.mintscan.io/shentu/account/${accountAddress}'
      },
      {
        kind: 'Shentu Explorer',
        url: 'https://explorer.shentu.technology/?net=shentu-2.2',
        tx_page:
          'https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/shentu',
        tx_page: 'https://ping.pub/shentu/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/certik',
        tx_page: 'https://atomscan.com/certik/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sifchain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://sifchain.finance/',
    pretty_name: 'Sifchain',
    chain_id: 'sifchain-1',
    bech32_prefix: 'sif',
    daemon_name: 'sifnoded',
    node_home: '$HOME/.sifnoded',
    codebase: {
      git_repo: 'https://github.com/Sifchain/sifnode.git',
      recommended_version: 'v1.0.14-beta',
      compatible_versions: ['v1.0.14-beta'],
      binaries: {
        'linux/amd64':
          'https://github.com/Sifchain/sifnode/releases/download/v1.0.14-beta/sifnoded-v1.0.14-beta-linux-amd64.zip'
      },
      genesis: {
        genesis_url:
          'https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'sifchain.mainnet.seed.autostake.net:26686',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13256',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: '0d4981bdaf4d5d73bad00af3b1fa9d699e4d3bc0',
          address: '44.235.108.41:26656'
        },
        {
          id: 'bcc2d07a14a8a0b3aa202e9ac106dec0bef91fda',
          address: '13.55.247.60:26656'
        },
        {
          id: '663dec65b754aceef5fcccb864048305208e7eb2',
          address: '34.248.110.88:26656'
        },
        {
          id: '0120f0a48e7e81cc98829ef4f5b39480f11ecd5a',
          address: '52.76.185.17:26656'
        },
        {
          id: '6535497f0152293d773108774a705b86c2249a9c',
          address: '44.238.121.65:26656'
        },
        {
          id: 'fdf5cffc2b20a20fab954d3b6785e9c382762d14',
          address: '34.255.133.248:26656'
        },
        {
          id: '8c240f71f9e060277ce18dc09d82d3bbb05d1972',
          address: '13.211.43.177:26656'
        },
        {
          id: '9fbcb6bd5a7f20a716564157c4f6296d2faf5f64',
          address: '18.138.208.95:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'sifchain.mainnet.peer.autostake.net:26686',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.sifchain.finance:443'
        },
        {
          address: 'https://rpc-archive.sifchain.finance:443'
        },
        {
          address: 'https://sifchain.rpc.consensus.one:443',
          provider: 'Consensus One'
        },
        {
          address: 'https://sifchain-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-sifchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.sifchain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://sif-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://rpc.sifchain.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://sifchain.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.sifchain.finance:443'
        },
        {
          address: 'grpc-sifchain-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'sifchain-grpc.polkachu.com:13290',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.sifchain.posthuman.digital:443',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://sifchain.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://api.sifchain.finance:443'
        },
        {
          address: 'https://sifchain.api.consensus.one:443',
          provider: 'Consensus One'
        },
        {
          address: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.sifchain.chaintools.tech/',
          provider: 'ChainTools'
        },
        {
          address: 'https://sifchain-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://sif-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://lcd.sifchain.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://sifchain.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://sifchain.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/sifchain',
        tx_page: 'https://ezstaking.tools/sifchain/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/sifchain',
        tx_page: 'https://ping.pub/sifchain/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://sifchain.explorers.guru',
        tx_page: 'https://sifchain.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/sifchain',
        tx_page: 'https://www.mintscan.io/sifchain/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/sifchain/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/sifchain',
        tx_page: 'https://atomscan.com/sifchain/transactions/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sommelier',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://sommelier.finance/',
    pretty_name: 'Sommelier',
    chain_id: 'sommelier-3',
    bech32_prefix: 'somm',
    daemon_name: 'sommelier',
    node_home: '$HOME/.sommelier',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'usomm'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/PeggyJV/sommelier',
      recommended_version: 'v4.0.2',
      compatible_versions: ['v4.0.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v4.0.2/sommelier_4.0.2_linux_amd64.tar.gz',
        'linux/arm64':
          'https://github.com/PeggyJV/sommelier/releases/download/v4.0.2/sommelier_4.0.2_linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v4.0.2/sommelier_4.0.2_darwin_amd64.tar.gz',
        'darwin/arm64':
          'https://github.com/PeggyJV/sommelier/releases/download/v4.0.2/sommelier_4.0.2_darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v4.0.2/sommelier_4.0.2_windows_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-2/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'a96d69179e4b72f728b9dd4dbe40400701515fee',
          address: '80.64.208.51:26656'
        },
        {
          id: '759a61eade50cb48e2a6f974fab679096d1de916',
          address: '34.127.107.137:26656'
        },
        {
          id: '14ac13745a563876740b72637ab9a3539542fe2b',
          address: '35.185.230.0:26656'
        },
        {
          id: 'bebf759f5706137168e3a7158e4495865a04cca9',
          address: '34.83.151.60:26656'
        },
        {
          id: 'c94fd60124e3656df54ff965d178e36c760c195d',
          address: '65.108.57.224:26656'
        },
        {
          id: '65cc609f9ae965323bd03d1b84f7fa340e6b6c7d',
          address: '51.38.52.210:36656'
        },
        {
          id: '4ed70d91bd645e78a78fe6cd4d1973937bb739e1',
          address: '51.91.67.48:36656'
        },
        {
          id: '404e6b2176bf74018cfdeb275c21ce264d43c673',
          address: '54.38.46.179:36656'
        },
        {
          id: 'c7334f0462cad3272f7d504f7a293fd2585165ef',
          address: '35.215.30.79:26656'
        },
        {
          id: '194f89dd1d08a82e99bf76aee535e6d4b3c79354',
          address: 'seeds.pupmos.network:2002',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:14156',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:14156',
          provider: 'Lavender.Five Nodes 🐝'
        }
      ],
      persistent_peers: [
        {
          id: 'e1d1dd22a63b1899ac51c8c96416f77c8ef98231',
          address: 'sommelier.tendermint.cloud:26656',
          provider: 'tendermint'
        },
        {
          id: '6533beebc826f84376e503bbc3265b07b26b9ad5',
          address: 'sommelier.standardcryptovc.com:26656',
          provider: 'standardcrypto'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-sommelier.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://sommelier-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-sommelier.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://sommelier-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://rpc.somm.bh.rocks/',
          provider: 'BlockHunters 🎯'
        }
      ],
      rest: [
        {
          address: 'https://lcd-sommelier.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-sommelier.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://sommelier-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://sommelier-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://api.somm.bh.rocks/',
          provider: 'BlockHunters 🎯'
        }
      ],
      grpc: [
        {
          address: '35.230.37.28:9090',
          provider: 'strangelove'
        },
        {
          address: 'sommelier-grpc.polkachu.com:14190',
          provider: 'Polkachu'
        },
        {
          address: 'https://sommelier-grpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc.somm.bh.rocks:443/',
          provider: 'BlockHunters 🎯'
        }
      ]
    },
    explorers: [
      {
        kind: 'sommscan',
        url: 'https://sommscan.io',
        tx_page: 'https://sommscan.io'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/sommelier',
        tx_page: 'https://www.mintscan.io/sommelier/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/sommelier/account/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stafihub',
    chain_id: 'stafihub-1',
    website: 'https://stafihub.io/',
    pretty_name: 'StaFi Hub',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'stafi',
    daemon_name: 'stafihubd',
    node_home: '$HOME/.stafihub',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ufis',
          fixed_min_gas_price: 0
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ufis'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/stafihub/stafihub',
      recommended_version: 'v0.2.3',
      compatible_versions: ['v0.2.3'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/stafihub/network/main/mainnets/stafihub-1(dragonberry)/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: 'bed296dfadd972ed07cab82c87a0ee5c182dea43',
          address: '18.136.189.120:26656'
        },
        {
          id: '045fe6e054a5abe35f5433bd333f0a1b18aa28cf',
          address: '45.136.28.11:26656'
        },
        {
          id: 'd35d55635093fddb6de22295c8fe31de98efe6ef',
          address: '5.161.120.176:26656'
        },
        {
          id: '20c0b45c47426c51b3187aa5dca82d9900c2fb36',
          address: '5.161.88.157:26656'
        },
        {
          id: '70230067eb1e668d2566329e727c72c930e54de3',
          address: '116.202.30.7:26656'
        },
        {
          id: '03f3cb61c7c472044c37aeededde2ffe8884fa02',
          address: '159.69.108.86:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://public-rpc1.stafihub.io:443',
          provider: 'StaFiHub'
        },
        {
          address: 'https://public-rpc2.stafihub.io:443',
          provider: 'StaFiHub'
        },
        {
          address: 'https://rpc.stafihub.nodestake.top:443',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc.stafihub.mcbnode.online:443',
          provider: 'MCBNode'
        },
        {
          address: 'https://stafihub.nodejumper.io:443',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://public-rest-rpc1.stafihub.io',
          provider: 'StaFiHub'
        },
        {
          address: 'https://public-rest-rpc2.stafihub.io',
          provider: 'StaFiHub'
        },
        {
          address: 'https://api.stafihub.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api.stafihub.mcbnode.online',
          provider: 'MCBNode'
        },
        {
          address: 'https://stafihub.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://public-grpc-rpc1.stafihub.io',
          provider: 'StaFiHub'
        },
        {
          address: 'https://public-grpc-rpc2.stafihub.io',
          provider: 'StaFiHub'
        },
        {
          address: 'https://grpc.stafihub.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc.stafihub.mcbnode.online',
          provider: 'MCBNode'
        },
        {
          address: 'https://stafihub.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stafi',
        tx_page: 'https://www.mintscan.io/stafi/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/stafihub',
        tx_page: 'https://ping.pub/stafihub/tx/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png'
    },
    keywords: ['liquid staking']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stargaze',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://stargaze.zone/',
    pretty_name: 'Stargaze',
    chain_id: 'stargaze-1',
    bech32_prefix: 'stars',
    daemon_name: 'starsd',
    node_home: '$HOME/.starsd',
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/public-awesome/stargaze',
      recommended_version: 'v8.0.0',
      compatible_versions: ['v8.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '70ed826888f102c7c1ceb4d07287956628a53508',
          address: '174.138.124.7:36656'
        },
        {
          id: '722079345d941cd2da3daedea548c909d9b83ec5',
          address: '104.248.101.113:36656'
        },
        {
          id: 'd5fc4f479c4e212c96dff5704bb2468ea03b8ae3',
          address: 'sg-seed.blockpane.com:26656',
          provider: '[ block pane ]'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:13756',
          provider: 'RHINO'
        },
        {
          id: '2f7b2d38b1a4f76b20e917e01fb9f4a200bbf80c',
          address: 'seeds.pupmos.network:2004',
          provider: 'PUPMØS'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13756',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'stargaze.mainnet.seed.autostake.net:26986',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '604f4baaa30cd3f50d080bf45806d222c7fadc94',
          address: 'seeds.whispernode.com:13756',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '1d73521c565b37a53038fc730bcd207a3db361b6',
          address: '144.91.91.30:26656',
          provider: '0xSR'
        },
        {
          id: '524dd60331c56d198deabbb70238c2cc69119cca',
          address: '161.97.122.216:36656',
          provider: 'Army IDs'
        },
        {
          id: '0c9ebd7b36f96d0279dbf6dc38572f5797c096c1',
          address: '65.108.42.168:26656',
          provider: 'ramuchi.tech'
        },
        {
          id: '320e4b81ab327dd2593a39de0d3ae718fdb9347c',
          address: '176.9.168.220:26656',
          provider: 'Staketab'
        },
        {
          id: 'b8eeb6d99594c218c0373d8ec4c1e81031b92198',
          address: '68.183.92.46:26656',
          provider: 'KingSuper'
        },
        {
          id: '387c32677c54dd4627366ffdf8e2dda68e71af69',
          address: '54.193.168.147:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'e28635dc537dce1d6f1cf44b7b335a530d923fa1',
          address: '15.165.94.246:26656',
          provider: 'Cosmostation'
        },
        {
          id: '413562a502b4a47ec3375bfae6aa01bc47bc6979',
          address: '204.236.141.188:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'ca93b9bed1a98184f36ca31a6cc6dad2e289a2d4',
          address: '94.130.165.103:26656',
          provider: 'OranG3cluB'
        },
        {
          id: '0c7e82641f81754fc30158587c7e4a30ddb5c967',
          address: '54.216.187.98:26656',
          provider: 'needlecast'
        },
        {
          id: '1de5e685e687d0df35e6f3734ee04aff956d5c0f',
          address: '75.119.154.98:26656',
          provider: 'StakeLab'
        },
        {
          id: '6353ff1783e076a70ab444c4229c01ed6df6b477',
          address: '65.21.193.190:26656',
          provider: 'sashamaxymchuk[MantiCore]'
        },
        {
          id: '5eb7bcdd83b47744b652f11ecd8495a670612643',
          address: '135.181.176.62:26656',
          provider: 'StakeCraft'
        },
        {
          id: '75ea9c7b04be4a5779853b6e17c773ab092652c8',
          address: '91.230.111.50:26656',
          provider: 'EmreNOP | BlockSeal'
        },
        {
          id: '9f860496d2a346cc7888d7b4a7887f6bfc0fc0e4',
          address: '162.55.39.33:26656',
          provider: 'Blackhox'
        },
        {
          id: 'f89e655de3e6804e6448de3de3428bea1fd0fa97',
          address: '135.181.21.55:36656',
          provider: 'Alex (Bambarello) Validator'
        },
        {
          id: '1c8aabb166c7757c26cdbb1bfc380146ca59bc4e',
          address: '135.181.179.49:26356',
          provider: 'Bloqhub'
        },
        {
          id: '2783a2b3bf3f84947c919588e8b0ca2c05e8053d',
          address: '167.99.238.45:26656'
        },
        {
          id: '64d19582ff31ac88245ac604dc18d48b41470f48',
          address: '167.99.238.45:26656'
        },
        {
          id: 'c636bf9ad65959b738c15eb5458a89a88cba32a4',
          address: '135.181.102.205:26656',
          provider: 'tsundokum'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'stargaze.mainnet.peer.autostake.net:26986',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://rpc-stargaze.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc-stargaze.ezstaking.dev',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://stargaze-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-stargaze-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://stargaze.c29r3.xyz:443/rpc/',
          provider: 'c29r3'
        },
        {
          address: 'https://rpc.stargaze.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://stargaze-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc-stargaze.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rpc.stargaze.silentvalidator.com/',
          provider: 'silent'
        }
      ],
      rest: [
        {
          address: 'https://rest.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://api-stargaze.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://api-stargaze.ezstaking.dev',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://api-stargaze-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://stargaze.c29r3.xyz:443/api/',
          provider: 'c29r3'
        },
        {
          address: 'https://stargaze-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.stargaze.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://stargaze-api.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://api-stargaze.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://api.stargaze.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://stargaze.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-stargaze-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'stargaze-grpc.polkachu.com:13790',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.stargaze.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc-stargaze.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://grpc.stargaze.silentvalidator.com/',
          provider: 'silent'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/stargaze',
        tx_page: 'https://ezstaking.tools/stargaze/txs/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stargaze/',
        tx_page: 'https://www.mintscan.io/stargaze/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/stargaze/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/stargaze',
        tx_page: 'https://ping.pub/stargaze/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/stargaze',
        tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'starname',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.starname.me/',
    pretty_name: 'Starname',
    chain_id: 'iov-mainnet-ibc',
    bech32_prefix: 'star',
    slip44: 234,
    codebase: {
      git_repo: 'https://github.com/iov-one/starnamed',
      recommended_version: 'v0.10.18',
      compatible_versions: ['v0.10.17', 'v0.10.18'],
      genesis: {
        genesis_url:
          'https://gist.githubusercontent.com/davepuchyr/6bea7bf369064d118195e9b15ea08a0f/raw/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: 'ca133187b37b59d2454812cfcf31b6211395adec',
          address: '167.99.194.126:16656'
        },
        {
          id: '1c7e014b65f7a3ea2cf48bffce78f5cbcad2a0b7',
          address: '13.37.85.253:26656'
        },
        {
          id: '8c64a2127cc07d4570756b61f83af60d34258398',
          address: '13.37.61.32:26656'
        },
        {
          id: '9aabe0ac122f3104d8fc098e19c66714c6f1ace9',
          address: '3.37.140.5:26656'
        },
        {
          id: 'faedef1969911d24bf72c56fc01326eb891fa3b7',
          address: '63.250.53.45:16656'
        },
        {
          id: '94ac1c02b4e2ca3fb2706c91a68b8030ed3615a1',
          address: '35.247.175.128:16656'
        },
        {
          id: 'be2235996b1c785a9f57eed25fd673ca111f0bae',
          address: '52.52.89.64:26656'
        },
        {
          id: 'f63d15ab7ed55dc75f332d0b0d2b01d529d5cbcd',
          address: '212.71.247.11:26656'
        },
        {
          id: 'f5597a7ed33bc99eb6ba7253eb8ac76af27b4c6d',
          address: '138.201.20.147:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-iov.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-starname-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://starname.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://lcd-iov.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-starname-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://starname.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'grpc-starname-ia.cosmosia.notional.ventures:443',
          provider: 'starname'
        },
        {
          address: 'https://starname.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/starname',
        tx_page: 'https://www.mintscan.io/starname/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/starname/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/starname',
        tx_page: 'https://ping.pub/starname/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/starname',
        tx_page: 'https://atomscan.com/starname/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stride',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://stride.zone/',
    pretty_name: 'Stride',
    chain_id: 'stride-1',
    bech32_prefix: 'stride',
    daemon_name: 'strided',
    node_home: '$HOME/.stride',
    key_algos: ['ed25519'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ustrd',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0,
          high_gas_price: 0.04
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Stride-Labs/stride',
      recommended_version: 'v4.0.2',
      compatible_versions: ['v4.0.0', 'v4.0.2', 'v4.0.3'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/Stride-Labs/testnet/main/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:12256',
          provider: 'RHINO'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:12256',
          provider: 'Polkachu'
        },
        {
          id: 'cb91a11588d66cfd9c01f99541df4978a08e0e39',
          address: 'seedv1.main.stridenet.co:26656',
          provider: 'Stride'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:12256',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'stride.mainnet.seed.autostake.net:26886',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
          address: 'stride.rpc.kjnodes.com:16659',
          provider: 'kjnodes'
        },
        {
          id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
          address: 'stride.seed.node75.org:10456',
          provider: 'Pro-Nodes75'
        },
        {
          id: '95d0377592a657d4c0816d9845e11d659db75d5b',
          address: 'seeds.whispernode.com:12256',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '1387946c04bceb472113f657f55f670f71709230',
          address: '65.108.4.188:12256',
          provider: 'Polkachu-1'
        },
        {
          id: 'df3f533e6b9776c11f08da804edcb810cbdd2080',
          address: '65.108.234.23:12256',
          provider: 'Polkachu-2'
        },
        {
          id: '1387946c04bceb472113f657f55f670f71709230',
          address: '65.108.4.188:12256',
          provider: 'Polkachu-3'
        },
        {
          id: '076e97f47762a477f2ae3dd3e798a7970b6bb20d',
          address: '52.52.110.228:26656',
          provider: 'Cosmostation-1'
        },
        {
          id: 'e821acdaf0c7a3c60ea3cd4eb4a98a62dad06f58',
          address: '43.201.12.41:26656',
          provider: 'Cosmostation-2'
        },
        {
          id: 'b5f9fa874781f975687018ae559f0d952d3a2e24',
          address: '52.52.208.179:26656',
          provider: 'Cosmostation-3'
        },
        {
          id: '04ea9eceee16db90872fee3fbef9ac50a87702c5',
          address: '185.248.24.29:26656',
          provider: 'Whi𝕊perNode'
        },
        {
          id: '9a65aeddaebe1d391058eae5b82e34907547ded1',
          address: 'alice.peers.stride.bh.rocks:46656',
          provider: 'BlockHunters'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'stride.mainnet.peer.autostake.net:26886',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://stride-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://stride.rpc.chandrastation.com',
          provider: 'Chandra Station'
        },
        {
          address: 'https://rpc.stride.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'http://rpc-stride.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://stride-rpc.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://stride.rpc.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://rpc.stride.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-stride.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://rpc.stride.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://stride.rpc.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://rpc-stride.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc-stride.architectnodes.com',
          provider: 'Architect Nodes'
        },
        {
          address: 'https://stride.nodejumper.io:443',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://stride-api.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://stride.api.chandrastation.com',
          provider: 'Chandra Station'
        },
        {
          address: 'https://api.stride.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'http://api-stride.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://stride-api.lavenderfive.com/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://stride.rest.interchain.ivaldilabs.xyz',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://api.stride.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api-stride.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://api.stride.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://stride.api.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://api-stride.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://stride.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://stride.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          address: 'https://rest-stride.architectnodes.com',
          provider: 'Architect Nodes'
        }
      ],
      grpc: [
        {
          address: 'stride-grpc.polkachu.com:12290',
          provider: 'Polkachu'
        },
        {
          address: 'https://grpc.stride.bh.rocks',
          provider: 'BlockHunters'
        },
        {
          address: 'https://stride-grpc.lavenderfive.com:443/',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'stride.grpc.interchain.ivaldilabs.xyz:443',
          provider: 'Ivaldi Labs'
        },
        {
          address: 'https://grpc.stride.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'http://grpc-stride.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://grpc-stride.d-stake.xyz',
          provider: 'D-stake'
        },
        {
          address: 'https://grpc.stride.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://stride.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'Apollo',
        url: 'https://apollo.chandrastation.com/stride',
        tx_page: 'https://apollo.chandrastation.com/stride/tx/${txHash}',
        account_page:
          'https://apollo.chandrastation.com/stride/account/${accountAddress}'
      },
      {
        kind: 'Stride Ping Pub',
        url: 'https://explorer.stride.zone/stride',
        tx_page: 'https://explorer.stride.zone/stride/tx/${txHash}',
        account_page:
          'https://explorer.stride.zone/stride/account/${accountAddress}'
      },
      {
        kind: 'Nodeist Explorer',
        url: 'https://exp.nodeist.net/Stride',
        tx_page: 'https://exp.nodeist.net/Stride/tx/${txHash}',
        account_page: 'https://exp.nodeist.net/Stride/account/${accountAddress}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stride',
        tx_page: 'https://www.mintscan.io/stride/txs/${txHash}',
        account_page: 'https://www.mintscan.io/stride/account/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stride-chain-logo.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'teritori',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://teritori.com/',
    pretty_name: 'Teritori',
    chain_id: 'teritori-1',
    daemon_name: 'teritorid',
    node_home: '$HOME/.teritorid',
    bech32_prefix: 'tori',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'utori',
          low_gas_price: 0,
          average_gas_price: 0.25,
          high_gas_price: 0.5
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'utori'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/TERITORI/teritori-chain',
      recommended_version: 'v1.3.0',
      compatible_versions: ['v1.3.0'],
      genesis: {
        genesis_url:
          'https://github.com/TERITORI/teritori-chain/raw/mainnet/mainnet/teritori-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'seed.rhinostake.com:15956',
          provider: 'RHINO'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:15956',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f',
          address: 'teritori-seed.p2p.brocha.in:30551',
          provider: 'Brochain'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:15956',
          provider: 'Polkachu'
        },
        {
          id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
          address: 'teritori.rpc.kjnodes.com:19659',
          provider: 'kjnodes'
        },
        {
          id: '8f75bd347c90fbaa2c96eb187a413bb3751b3a7e',
          address: 'seeds.whispernode.com:15956',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: '8f28518afd31a42ea81bb3232a50ab0cec4dcdf7',
          address: '10.201.190.1:26656',
          provider: 'teritori-core-1 ⛩'
        },
        {
          id: '6046cec27c36f0a7596cb9fa9f2c5decbd4e87cb',
          address: '10.193.255.1:26656',
          provider: 'teritori-core-2 ⛩⛩'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://teritori-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://teritori-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-teritori.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://rpc.teritori.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc.teritori.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://teritori-rpc.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://teritori.nodejumper.io',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://teritori-rpc.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://rpc-teritori.mms.team/',
          provider: 'MMS'
        },
        {
          address: 'https://rpc-teritori.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://teritori.rpc.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://rpc.tori.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://teritori-rpc.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://m-teritori.rpc.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://rpc.teritori.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://rpc-teritori.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      rest: [
        {
          address: 'https://teritori-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://teritori-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-teritori.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://api.teritori.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://api.teritori.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://teritori-rest.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://teritori.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://teritori-api.ibs.team',
          provider: 'Inter Blockchain Services'
        },
        {
          address: 'https://api-teritori.mms.team/',
          provider: 'MMS'
        },
        {
          address: 'https://rest-teritori.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://teritori.api.kjnodes.com',
          provider: 'kjnodes'
        },
        {
          address: 'https://api.tori.bh.rocks',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://teritori-api.kleomedes.network',
          provider: 'Kleomedes'
        },
        {
          address: 'https://m-teritori.api.utsa.tech',
          provider: 'lesnik | UTSA'
        },
        {
          address: 'https://api.teritori.silknodes.io',
          provider: 'Silk Nodes'
        },
        {
          address: 'https://api-teritori.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      grpc: [
        {
          address: 'https://teritori-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://grpc-teritori.nodeist.net',
          provider: 'Nodeist'
        },
        {
          address: 'https://grpc.teritori.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://grpc.teritori.silentvalidator.com/',
          provider: 'silent'
        },
        {
          address: 'https://teritori.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        },
        {
          address: 'https://teritori-grpc.brocha.in',
          provider: 'Brochain'
        },
        {
          address: 'https://grpc-teritori.mms.team/',
          provider: 'MMS'
        },
        {
          address: 'teritori-grpc.polkachu.com:15990',
          provider: 'Polkachu'
        },
        {
          address: 'grpc.tori.bh.rocks:443',
          provider: 'BlockHunters 🎯'
        },
        {
          address: 'https://grpc.teritori.silknodes.io/',
          provider: 'Silk Nodes'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://ezstaking.tools/teritori',
        tx_page: 'https://ezstaking.tools/teritori/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.teritori.com/teritori',
        tx_page: 'https://explorer.teritori.com/teritori/tx/${txHash}'
      },
      {
        kind: 'guru',
        url: 'https://teritori.explorers.guru/',
        tx_page: 'https://teritori.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'Nodeist',
        url: 'https://exp.nodeist.net',
        tx_page: 'https://exp.nodeist.net/M-Teritori/tx/${txHash}'
      },
      {
        kind: 'Brochain',
        url: 'https://explorer.brocha.in/teritori',
        tx_page: 'https://explorer.brocha.in/teritori/tx/${txHash}'
      },
      {
        kind: 'lesnik | UTSA',
        url: 'https://exp.utsa.tech/teritori',
        tx_page: 'https://exp.utsa.tech/teritori/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/teritori',
        tx_page: 'https://www.mintscan.io/teritori/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/teritori/account/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terra',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Terra Classic',
    chain_id: 'columbus-5',
    daemon_name: 'terrad',
    node_home: '$HOME/.terra',
    bech32_prefix: 'terra',
    slip44: 330,
    fees: {
      fee_tokens: [
        {
          denom: 'uluna',
          low_gas_price: 5.665,
          average_gas_price: 5.665,
          high_gas_price: 10
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uluna'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/terra-money/core/',
      recommended_version: 'v0.5.17',
      compatible_versions: ['v0.5.17', 'v0.5.16'],
      binaries: {
        'linux/amd64':
          'https://github.com/terra-money/core/releases/download/v0.5.17/terra_0.5.17_Linux_x86_64.tar.gz',
        'darwin/amd64':
          'https://github.com/terra-money/core/releases/download/v0.5.17/terra_0.5.17_Darwin_x86_64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://columbus-genesis.s3.ap-northeast-1.amazonaws.com/columbus-5-genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'e999fc20aa5b87c1acef8677cf495ad85061cfb9',
          address: 'seed.terra.delightlabs.io:26656'
        },
        {
          id: '6d8e943c049a80c161a889cb5fcf3d184215023e',
          address: 'public-seed2.terra.dev:26656'
        },
        {
          id: '87048bf71526fb92d73733ba3ddb79b7a83ca11e',
          address: 'public-seed.terra.dev:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'terraclassic.mainnet.seed.autostake.net:26676',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      persistent_peers: [
        {
          id: '3ddf51347ba7c2bc4a8e1e26ee9d1cbf81034516',
          address: '162.55.244.250:27656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'terraclassic.mainnet.peer.autostake.net:26676',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://terra-rpc.easy2stake.com:443',
          provider: 'Easy2stake'
        },
        {
          address: 'http://public-node.terra.dev:26657',
          provider: 'Terra'
        },
        {
          address: 'https://rpc-terra-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://blockdaemon-terra-lcd.api.bdnodes.net:1317',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://api-terra-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://terraclassic.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-terra-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/terra-luna',
        tx_page: 'https://ping.pub/terra-luna/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/terra',
        tx_page: 'https://atomscan.com/terra/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terra2',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.terra.money/',
    pretty_name: 'Terra 2.0',
    chain_id: 'phoenix-1',
    daemon_name: 'terrad',
    node_home: '$HOME/.terra',
    bech32_prefix: 'terra',
    slip44: 330,
    fees: {
      fee_tokens: [
        {
          denom: 'uluna',
          fixed_min_gas_price: 0.0125,
          low_gas_price: 0.0125,
          average_gas_price: 0.015,
          high_gas_price: 0.15
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uluna'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/terra-money/core/',
      recommended_version: 'v2.2.0',
      compatible_versions: ['v2.2.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/terra-money/core/releases/download/v2.2.0/terra_2.2.0_Linux_x86_64.tar.gz',
        'darwin/amd64':
          'https://github.com/terra-money/core/releases/download/v2.2.0/terra_2.2.0_Darwin_x86_64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://phoenix-genesis.s3.us-west-1.amazonaws.com/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '406bcf90a7b29df6ae475a1f94abe04ebde805af',
          address: 'phoenix.seed.stakebin.io:16656'
        },
        {
          id: 'fc608a9a117d8d2302bcd181aec34eec6bb4fa96',
          address: 'terra2-seed.blockpane.com:26656'
        },
        {
          id: '8efd8248e06aabd553b56766ec2a850999d0861f',
          address: 'exitnode.cereslabs.io:36656'
        },
        {
          id: 'b4d3b21747539060b270457437ef1bf99a51c694',
          address: 'terra2.seed.synergynodes.com:26656'
        },
        {
          id: '810d1628db9f1db56fa87a93fb6ef809c32d6325',
          address: 'phoenix.seed.terra.btcsecure.io:26656'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:11756',
          provider: 'Polkachu'
        },
        {
          id: '20e1000e88125698264454a884812746c2eb4807',
          address: 'seeds.lavenderfive.com:11756',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'terra.mainnet.seed.autostake.net:26676',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '1e094db9c147a0fd5e9793365d66736c80bfef46',
          address: 'seeds.whispernode.com:11756',
          provider: 'WhisperNode🤐'
        }
      ],
      persistent_peers: [
        {
          id: 'dc865a0d882f30e41e99ef23d9e6164163607523',
          address: '54.147.79.192:26656'
        },
        {
          id: 'bdce6030a2bdebe4c660a76599fe3dee4a42d50f',
          address: '35.154.54.64:26656'
        },
        {
          id: '0f1096278efafcf3f0d3bd5b6544e6b8dcc36a0e',
          address: '206.189.129.195:26656'
        },
        {
          id: 'c8ab8910e5f7bfcc6e81351eb851eb8c0540a194',
          address: 'exitnode.cereslabs.io:26656'
        },
        {
          id: '33afc1c21cb225bb2cfb9700442a576bbaeb7691',
          address: '163.172.100.203:26656'
        },
        {
          id: '9038d63588e0ab421fa71582720c1efb1ee867f6',
          address: '45.34.1.114:27656'
        },
        {
          id: 'daa2fd0dc725d6673e7688c9c57fc3b6d99c83c4',
          address: 'solarsys.noip.me:27656'
        },
        {
          id: '331c2bbcd1aab921563dce85dedae840e1369e39',
          address: '142.132.199.98:10656'
        },
        {
          id: '91b675be5f81931375358e02ab687c88fab02e41',
          address: '135.148.55.229:11656'
        },
        {
          id: '9dc9e9b50c4cae52cdbec2034d879427b2a429ae',
          address: '54.180.81.122:26656'
        },
        {
          id: 'ad825ef6b29306d80b0eb8101133cedf7933eb5e',
          address: '116.203.36.94:26656'
        },
        {
          id: 'f2069012aec5ced4e88e7e4311391eabe72bb5a3',
          address: 'node-phoenix.terra.lunastations.online:26656'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'terra.mainnet.peer.autostake.net:26676',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
          address: 'terra.seed.node75.org:10856',
          provider: 'Pro-Nodes75'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.terrav2.ccvalidators.com:443/',
          provider: 'CryptoCrew'
        },
        {
          address: 'https://terra-rpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://terra-rpc.polkachu.com',
          provider: 'polkachu'
        },
        {
          address: 'https://terra-rpc.stakely.io:443/',
          provider: 'stakely'
        },
        {
          address: 'https://rpc-terra.wildsage.io:443/',
          provider: 'WildSage Labs'
        }
      ],
      rest: [
        {
          address: 'https://terra-api.polkachu.com',
          provider: 'polkachu'
        },
        {
          address: 'https://terra-api.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'https://fcd.terrav2.ccvalidators.com:443/',
          provider: 'CryptoCrew'
        },
        {
          address: 'https://lcd-terra.wildsage.io:443/',
          provider: 'WildSage Labs'
        },
        {
          address: 'https://terra.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'https://terra-grpc.lavenderfive.com:443',
          provider: 'Lavender.Five Nodes 🐝'
        },
        {
          address: 'terra-grpc.polkachu.com:11790',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'finder',
        url: 'https://finder.terra.money/',
        tx_page: 'https://finder.terra.money/mainnet/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terra2testnet',
    status: 'live',
    network_type: 'testnet',
    website: 'https://www.terra.money/',
    pretty_name: 'Terra 2.0 Testnet',
    chain_id: 'pisco-1',
    daemon_name: 'terrad',
    node_home: '$HOME/.terra',
    bech32_prefix: 'terra',
    slip44: 330,
    fees: {
      fee_tokens: [
        {
          denom: 'uluna',
          fixed_min_gas_price: 0.0125,
          low_gas_price: 0.0125,
          average_gas_price: 0.015,
          high_gas_price: 0.15
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uluna'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/terra-money/core/',
      recommended_version: 'v2.1.0-beta.1',
      compatible_versions: ['v2.1.0-beta.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/terra-money/core/releases/download/v2.1.0-beta.1/terra_2.1.0-beta.1_Linux_x86_64.tar.gz',
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/terra-money/testnet/master/pisco-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'c08d5b3d253bea18b24593a894a0aa6e168079d3',
          address: '34.232.34.124:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'a4a8fbd7d26242263250a1d3ecb39f113832534b',
          address: '52.73.183.21:26656',
        },
        {
          id: '3a4c8f4d75781f39b558c3889157acfaa144a793',
          address: '50.19.18.17:26656',
        },
        {
          id: '1eb3ebfdfe7748b958bcbb9d94fd4f08d699936f',
          address: '135.181.59.162:11756',
        },
        {
          id: 'd39e5f88732ac318147b06c045502296af8a41b6',
          address: '65.21.75.122:26656',
        },
        {
          id: '69356f7e79c9fd84c3ae619a55deebd38b6afb8d',
          address: '65.21.134.243:26656',
        },
        {
          id: '1212da9116f94cf7c3291e76b12738e0962e0a2d',
          address: '141.94.138.48:26656',
        },
        {
          id: 'ee196c8a0916a489de5f478f975d43a7558b778d',
          address: '34.228.224.60:26656',
        },
        {
          id: '5c7b4e640a381060788e71868530501870565aa8',
          address: '95.217.197.100:27656',
        },
        {
          id: '8eb1eeb389062ed8aef579468b5cf678d9572f94',
          address: '141.95.66.199:26312',
        },
        {
          id: '2503e540a01f90ff1e1695a436bc184be24ee2c1',
          address: '5.9.121.71:26656',
        },
        {
          id: '49c871e26f403f4f4db58de45ba729a4f7e21526',
          address: '44.193.226.212:26656',
        },
        {
          id: 'c08d5b3d253bea18b24593a894a0aa6e168079d3',
          address: '34.232.34.124:26656',
        },
        {
          id: '5a4cfb8fe5f59af5e6eaf9f980ece79864663e7c',
          address: '142.132.151.99:15613',
        },
        {
          id: '388b89412979a7ee4b075bb4d3aeda30900a50f0',
          address: '51.222.248.200:29003',
        },
        {
          id: 'e7f4428dea0c6019a8f1c790866243645e9742a0',
          address: '18.222.244.119:26656',
        },
        {
          id: '997c7ce88b650afc25e660b1b05892d4026b8473',
          address: '5.9.123.206:26656',
        },
        {
          id: '49309dc6665f6bb921358b141fd4e14f91fc0292',
          address: '18.194.243.144:26656',
        },
        {
          id: 'e3b4fac2740a35f1b401591f018ce42ff58992fe',
          address: '54.37.87.237:26656',
        },
        {
          id: 'e6e8f203cb625dae08a8951331e03640968292c4',
          address: '44.212.73.182:26656',
        },
        {
          id: '13138fbfc808f5c5de3832d5132f71923f174045',
          address: '88.99.146.56:26656',
        },
        {
          id: '3aad376cb911f1c66f39a37184e827cfc0fa6eb0',
          address: '195.15.247.57:26656',
        },
        {
          id: '0ab421af0a5cc15a50510e6a4885151eed685b8b',
          address: '195.15.245.39:26656',
        },
        {
          id: 'e4705a86e48b838d439d043b396da287fce82575',
          address: '195.15.247.218:26656',
        },
        {
          id: 'ba8c04500bcbf0c53fcab8ece14571bd330a6bf8',
          address: '185.252.220.89:25002',
        },
        {
          id: '16d480f7c90e69fd78adcd394567c60fe118149e',
          address: '142.132.153.6:16656',
        },
        {
          id: '5819ee584b7c72607028e0f4b7728f6980c24b42',
          address: '141.95.72.94:16095',
        },
        {
          id: '3b26c2935a8558a2d5455060d23461f352e9bdc1',
          address: '13.214.186.229:26656',
        },
        {
          id: '3a4c8f4d75781f39b558c3889157acfaa144a793',
          address: '50.19.18.17:26656',
        },
        {
          id: '83d50f890fdd12a5ccbdb4b8ed33e4ac3613bae0',
          address: '34.205.15.50:26656',
        },
        {
          id: '64cd4872abb00b67998c7cd4e4358f35219e2af1',
          address: '15.235.49.45:26656',
        },
        {
          id: '4552ad85b27151182b135e0347d2673f29566bef',
          address: '185.183.33.143:26656',
        },
        {
          id: '948f35f9aa8817dc65fbc522ef685e9fd5beba72',
          address: '198.244.179.125:30932',
        },
        {
          id: '9374ff9fcd57613cb8073b8a840b6ac9c10dcaa1',
          address: '52.44.2.128:26656',
        },
        {
          id: 'bc35dcbe37d3d060a48ceefa3c984fe97c56605d',
          address: '195.201.61.185:26656',
        },
        {
          id: '3f91e2a72058352342e14d5d84a3e3eed4282771',
          address: '54.220.239.167:26656',
        },
        {
          id: 'beea94b1073bf4442b8ed821ef2f537fcd924c40',
          address: '15.235.53.182:26312',
        },
        {
          id: '86d1ff445a5240b66af7893d99eb91ce799e16fa',
          address: '54.255.203.160:26656',
        },
        {
          id: 'a558107258800ee041292849e819682083a48eb0',
          address: '44.211.191.29:26656',
        },
        {
          id: '2bf890e8662e2bdaff997b5f30c7d50719e40b7b',
          address: '107.21.250.114:26656',
        },
        {
          id: '676168fbb6ed57834369a4933bf86a8fbca53cd6',
          address: '34.239.232.196:26656',
        },
        {
          id: 'c3b57f2d2e6cefb63aadd512c4e4d75ee506a2c6',
          address: '159.203.61.19:26656',
        },
        {
          id: '8dcd9c39b9d4a4ad4483e4558c756072997097b3',
          address: '65.108.67.92:26656',
        },
        {
          id: '3cf6fe54ebf581ac05afe30bcc88ef4f408f3b87',
          address: '50.250.156.59:46666',
        },
        {
          id: '448eeb45abd24156284320e1fdff3a8ca3a3e83d',
          address: '95.217.61.42:26656',
        },
        {
          id: '6b9a9074f2ff1c4fafd764de8e4a163a6bb006c3',
          address: '3.0.92.212:26656',
        },
        {
          id: '72df78d72d0efdb76e096e3efb737cb4bb82da8b',
          address: '13.213.74.127:26656',
        },
        {
          id: 'c5728bfa1ebe6625bfe492d311c73b7c78fef1c0',
          address: '116.203.36.94:46656',
        },
        {
          id: 'f679d64002ef3cc1faddf76873512d520cffdb52',
          address: '3.38.214.243:26656',
        },
        {
          id: 'cc31bc68f3f1531cf5c1a5fac0674f9aaaf2895b',
          address: '52.79.113.68:26656',
        },
        {
          id: '6be39166c43ec972a1e8e4227196d24a7fb83764',
          address: '44.204.48.13:26656',
        },
        {
          id: 'c931fe0726fde592ea65e0a74df869d50e200f2f',
          address: '44.201.252.117:26656',
        },
        {
          id: '62040ae9276771473672c083de3cb757f12a5e00',
          address: '80.64.208.157:26656',
        },
        {
          id: '960e2af1bf88136ae9cb632d44b5c2becaa676a1',
          address: '54.159.202.107:26656',
        },
        {
          id: '255162e755668e1f5ff85b95114bf2530471bb7d',
          address: '37.120.245.44:26656',
        },
        {
          id: '37a80dd85e57fe5fa7f448e0653eebff8cf73178',
          address: '198.244.228.16:26312',
        },
        {
          id: '3bfc40d3d7f14b59c5943bf2d45ce103d42174c5',
          address: '135.181.164.13:26655',
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: '176.9.82.221:11756',
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://terra-testnet-rpc.polkachu.com/',
          provider: 'Polkachu'
        }
      ],
      rest: [
        {
          address: 'https://terra-testnet-api.polkachu.com/',
          provider: 'Polkachu'
        }
      ],
      grpc: [
        {
          address: 'terra-testnet-grpc.polkachu.com:11790',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'finder',
        url: 'https://finder.terra.money/testnet',
        tx_page: 'https://finder.terra.money/testnet/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'axelartestnet',
    chain_id: 'axelar-testnet-lisbon-3',
    pretty_name: 'Axelar Testnet',
    status: 'live',
    network_type: 'testnet',
    website: 'https://axelar.network/',
    bech32_prefix: 'axelar',
    daemon_name: 'axelard',
    node_home: '$HOME/.axelard',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uaxl'
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uaxl'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/axelarnetwork/axelar-core'
    },
    apis: {
      rpc: [
        {
          address: 'https://axelartest-rpc.quickapi.com/',
          provider: 'Quickapi'
        }
      ],
      rest: [
        {
          address: 'https://axelartest-lcd.quickapi.com/',
          provider: 'Quickapi'
        }
      ]
    },
    explorers: [
      {
        kind: 'axelarscan',
        url: 'https://testnet.axelarscan.io',
        tx_page: 'https://testnet.axelarscan.io/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://testnet.mintscan.io/axelar-testnet',
        tx_page: 'https://testnet.mintscan.io/axelar-testnet/txs/${txHash}',
        account_page:
          'https://testnet.mintscan.io/axelar-testnet/account/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'bitcannadevnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'BitCanna Devnet-1',
    chain_id: 'bitcanna-dev-1',
    bech32_prefix: 'bcna',
    daemon_name: 'bcnad',
    node_home: '$HOME/.bcna',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ubcna',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/BitCannaGlobal/bcna',
      recommended_version: 'v1.5.3',
      compatible_versions: ['v1.5.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/BitCannaGlobal/bcna/releases/download/v1.5.3/bcna_linux_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/devnets/bitcanna-dev-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '471341f9befeab582e845d5e9987b7a4889c202f',
          address: '144.91.89.66:26656'
        }
      ],
      persistent_peers: [
        {
          id: '80ee9ed689bfb329cf21b94aa12978e073226db4',
          address: '212.227.151.143:26656'
        },
        {
          id: '20ca909b49106aacbf516ba28fa8a2409f825a82',
          address: '212.227.151.106:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-testnet.bitcanna.io',
          provider: 'bitcanna'
        }
      ],
      rest: [
        {
          address: 'https://lcd-testnet.bitcanna.io',
          provider: 'bitcanna'
        }
      ]
    },
    explorers: [
      {
        url: 'https://testnet.explorer.erialos.me/bitcanna',
        tx_page: 'https://testnet.explorer.erialos.me/bitcanna/tx/${txHash}'
      },
      {
        url: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna',
        tx_page: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'bitcannadevnet2',
    status: 'live',
    network_type: 'devnet',
    pretty_name: 'BitCanna Devnet-6 SDK v0.46.x',
    chain_id: 'bitcanna-dev-6',
    bech32_prefix: 'bcna',
    daemon_name: 'bcnad',
    node_home: '$HOME/.bcna',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ubcna',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/BitCannaGlobal/bcna',
      recommended_version: 'v2.0.0-beta',
      compatible_versions: ['v2.0.0-beta'],
      binaries: {
        'linux/amd64':
          'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.0-beta/bcna_linux_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/BitCannaGlobal/testnet-bcna-cosmos/main/instructions/bitcanna-dev-6/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '85be53f499c803a10e73734018334049a7c4686d',
          address: '212.227.151.105:26656'
        },
        {
          id: 'fb88f165477b7c7a4fbb47bb6b01448c732a0e88',
          address: '164.68.119.233:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-devnet-6.bitcanna.io/',
          provider: 'bitcanna'
        }
      ],
      grpc: [
        {
          address: 'http://devnet-6.bitcanna.io:9090',
          provider: 'bitcanna'
        }
      ],
      rest: [
        {
          address: 'https://lcd-devnet-6.bitcanna.io/',
          provider: 'bitcanna'
        }
      ]
    },
    explorers: [
      {
        url: 'https://explorer-devnet-6.bitcanna.io',
        tx_page: 'https://explorer-devnet-6.bitcanna.io/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'cheqdtestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'cheqd',
    chain_id: 'cheqd-testnet-4',
    bech32_prefix: 'cheqd',
    daemon_name: 'cheqd-noded',
    node_home: '$HOME/.cheqdnode',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ncheq',
          fixed_min_gas_price: 25,
          low_gas_price: 25,
          average_gas_price: 50,
          high_gas_price: 100
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cheqd/cheqd-node',
      recommended_version: 'v0.6.9',
      compatible_versions: ['v0.6.9', 'v0.6.8', 'v0.6.7', 'v0.6.1', 'v0.6.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cheqd/cheqd-node/releases/download/0.6.9/cheqd-noded-0.6.9-Linux-arm64.tar.gz',
        'linux/arm64':
          'https://github.com/cheqd/cheqd-node/releases/download/0.6.9/cheqd-noded-0.6.9-Linux-x86_64.tar.gz'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '658453f9578d82f0897f13205ca2e7ad37279f95',
          address: 'seed1-eu.cheqd.network:26656',
          provider: 'cheqd'
        },
        {
          id: '32d626260f74f3c824dfa15a624c078f27fc31a2',
          address: 'seed1-ap.cheqd.network:26656',
          provider: 'cheqd'
        }
      ],
      persistent_peers: [
        {
          id: '8c45237d435247270b95edae33fd1a69341eb1bb',
          address: 'sentry1-eu.cheqd.network:26656',
          provider: 'cheqd'
        },
        {
          id: '355d3e577b9b1eaadf438694e86364425cf4bb0e',
          address: 'sentry1-ap.cheqd.network:26656',
          provider: 'cheqd'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cheqd.network',
          provider: 'cheqd'
        }
      ],
      rest: [
        {
          address: 'https://api.cheqd.network',
          provider: 'cheqd'
        }
      ],
      grpc: [
        {
          address: 'grpc.cheqd.network:443',
          provider: 'cheqd'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://testnet-explorer.cheqd.io/',
        tx_page: 'https://testnet-explorer.cheqd.io/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
    }
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'coolcattestnet',
    status: 'live',
    network_type: 'testnet',
    website: 'https://app.coolcat.space/',
    pretty_name: 'CoolCat',
    chain_id: 'kitten-04',
    bech32_prefix: 'ccat',
    key_algos: ['secp256k1'],
    fees: {
      fee_tokens: [
        {
          denom: 'uccat',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 1,
          high_gas_price: 2
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uccat'
        }
      ]
    },
    daemon_name: 'coolcat',
    node_home: '$HOME/.coolcat',
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/DigitalKitchenLabs/coolcat',
      recommended_version: 'v2.0.0',
      compatible_versions: ['v2.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/DigitalKitchenLabs/testnets/main/kitten-04/genesis.json'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.coolcat.space',
          provider: 'Digital Kitchen'
        }
      ],
      rest: [
        {
          address: 'https://lcd.coolcat.space',
          provider: 'Digital Kitchen'
        }
      ],
      grpc: []
    },
    explorers: []
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'cosmoshubtestnet',
    chain_id: 'theta-testnet-001',
    pretty_name: 'Theta Testnet',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'cosmos',
    daemon_name: 'gaiad',
    node_home: '$HOME/.gaia',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uatom',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cosmos/gaia',
      recommended_version: 'v7.0.2',
      compatible_versions: ['v7.0.0', 'v7.0.1', 'v7.0.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-linux-amd64',
        'linux/arm64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-linux-arm64',
        'darwin/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-darwin-amd64',
        'windows/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-windows-amd64.exe'
      },
      genesis: {
        genesis_url:
          'https://github.com/cosmos/testnets/raw/master/v7-theta/public-testnet/genesis.json.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '639d50339d7045436c756a042906b9a69970913f',
          address: 'seed-01.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        },
        {
          id: '3e506472683ceb7ed75c1578d092c79785c27857',
          address: 'seed-02.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://public-cosmos-theta.w3node.com',
          provider: 'Interchain.FM'
        }
      ],
      rest: [
        {
          address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://public-cosmos-theta.w3node.com/rest/',
          provider: 'Interchain.FM'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        }
      ]
    },
    explorers: [
      {
        kind: 'Big Dipper',
        url: 'https://explorer.theta-testnet.polypore.xyz/',
        tx_page:
          'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'cosmwasmtestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'CosmWasm Testnet',
    chain_id: 'malaga-420',
    bech32_prefix: 'wasm',
    daemon_name: 'wasmd',
    node_home: '$HOME/.wasmd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'umlg',
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uand'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/CosmWasm/wasmd',
      recommended_version: 'v0.27',
      compatible_versions: ['v0.27'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: '3e3d0d09027dda13a1cd95b5146edc24da5ef872',
          address: '142.132.236.229:26656',
          provider: 'Confio'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.malaga-420.cosmwasm.com:443',
          provider: 'Confio'
        }
      ],
      rest: [
        {
          address: 'https://api.malaga-420.cosmwasm.com',
          provider: 'Confio'
        }
      ]
    },
    explorers: [
      {
        kind: 'BIG DIPPER',
        url: 'https://block-explorer.malaga-420.cosmwasm.com/',
        tx_page:
          'https://block-explorer.malaga-420.cosmwasm.com/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'cudostestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Cudos testnet',
    chain_id: 'cudos-testnet-public-3',
    bech32_prefix: 'cudos',
    key_algos: ['secp256k1'],
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/CudoVentures/cudos-node',
      recommended_version: 'v0.9.0',
      compatible_versions: ['v0.9.0'],
      genesis: {
        genesis_url:
          'https://github.com/CudoVentures/cudos-builders/blob/v0.9.0/docker/config/genesis.testnet.public.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '86a2f5d723718a030ee436dc792d14c42ba0bd3f',
          address: '34.67.137.129:26656',
          provider: 'cudo'
        },
        {
          id: 'a48e90ce5e7d01c40bc4352794f034880c2f2041',
          address: '34.102.114.30:26656',
          provider: 'cudo'
        },
        {
          id: 'f93e129f120fd1de3e9d60d2bd376ae96af325dd',
          address: '34.141.129.16:26656',
          provider: 'cudo'
        }
      ],
      persistent_peers: [
        {
          id: 'b48994dd2f25de4c2355cbda1681c5e8bbc1e8f2',
          address: '34.91.31.157:26656',
          provider: 'cudo'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://sentry1.gcp-uscentral1.cudos.org:26657',
          provider: 'cudo'
        },
        {
          address: 'https://sentry1.gcp-uscentral1.cudos.org:36657',
          provider: 'cudo'
        },
        {
          address: 'http://sentry2.gcp-uswest2.cudos.org:26657',
          provider: 'cudo'
        },
        {
          address: 'https://sentry2.gcp-uswest2.cudos.org:36657',
          provider: 'cudo'
        },
        {
          address: 'http://sentry3.gcp-euwest4.cudos.org:26657',
          provider: 'cudo'
        },
        {
          address: 'https://sentry3.gcp-euwest4.cudos.org:36657',
          provider: 'cudo'
        }
      ],
      rest: [
        {
          address: 'http://sentry1.gcp-uscentral1.cudos.org:1317',
          provider: 'cudo'
        },
        {
          address: 'https://sentry1.gcp-uscentral1.cudos.org:31317',
          provider: 'cudo'
        },
        {
          address: 'http://sentry2.gcp-uswest2.cudos.org:1317',
          provider: 'cudo'
        },
        {
          address: 'https://sentry2.gcp-uswest2.cudos.org:31317',
          provider: 'cudo'
        },
        {
          address: 'http://sentry3.gcp-euwest4.cudos.org:1317',
          provider: 'cudo'
        },
        {
          address: 'https://sentry3.gcp-euwest4.cudos.org:31317',
          provider: 'cudo'
        }
      ],
      grpc: [
        {
          address: 'http://sentry1.gcp-uscentral1.cudos.org:9090',
          provider: 'cudo'
        },
        {
          address: 'https://sentry1.gcp-uscentral1.cudos.org:39090',
          provider: 'cudo'
        },
        {
          address: 'http://sentry2.gcp-uswest2.cudos.org:9090',
          provider: 'cudo'
        },
        {
          address: 'https://sentry2.gcp-uswest2.cudos.org:39090',
          provider: 'cudo'
        },
        {
          address: 'http://sentry3.gcp-euwest4.cudos.org:9090',
          provider: 'cudo'
        },
        {
          address: 'https://sentry3.gcp-euwest4.cudos.org:39090',
          provider: 'cudo'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper-testnet',
        url: 'https://explorer.testnet.cudos.org/',
        tx_page: 'https://explorer.testnet.cudos.org/transactions/${txHash}',
        account_page:
          'https://explorer.testnet.cudos.org/accounts/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'empowertestnet',
    chain_id: 'altruistic-1',
    pretty_name: 'Empower Testnet',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'empower',
    daemon_name: 'empowerd',
    node_home: '$HOME/.empowerchain',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'umpwr',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/empowerchain/empowerchain',
      recommended_version: 'v0.0.1',
      compatible_versions: ['v0.0.1'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/empowerchain/empowerchain/main/testnets/altruistic-1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '9de92b545638f6baaa7d6d5109a1f7148f093db3',
          address: '65.108.77.106:26656'
        },
        {
          id: '4fd5e497563b2e09cfe6f857fb35bdae76c12582',
          address: '65.108.206.56:26656'
        },
        {
          id: 'fe32c17373fbaa36d9fd86bc1146bfa125bb4f58',
          address: '5.9.147.185:26656'
        },
        {
          id: '220fb60b083bc4d443ce2a7a5363f4813dd4aef4',
          address: '116.202.236.115:26656'
        },
        {
          id: '225ad85c594d03942a026b90f4dab43f90230ea0',
          address: '88.99.3.158:26656'
        },
        {
          id: '333de3fc2eba7eead24e0c5f53d665662b2ba001',
          address: '10.132.0.11:26656'
        },
        {
          id: '4a38efbae54fd1357329bd583186a68ccd6d85f9',
          address: '94.130.212.252:26656'
        },
        {
          id: '52450b21f346a4cf76334374c9d8012b2867b842',
          address: '167.172.246.201:26656'
        },
        {
          id: '6a675d4f66bfe049321c3861bcfd19bd09fefbde',
          address: '195.3.223.204:26656'
        },
        {
          id: '1069820cdd9f5332503166b60dc686703b2dccc5',
          address: '138.201.141.76:26656'
        },
        {
          id: '277ff448eec6ec7fa665f68bdb1c9cb1a52ff597',
          address: '159.69.110.238:26656'
        },
        {
          id: '3335c9458105cf65546db0fb51b66f751eeb4906',
          address: '5.189.129.30:26656'
        },
        {
          id: 'edc9aa0bbf1fcd7433fcc3650e3f50ab0becc0b5',
          address: '65.21.170.3:26656'
        },
        {
          id: 'd582bcd8a8f0a20c551098571727726bc75bae74',
          address: '213.239.217.52:26656'
        },
        {
          id: 'eb182533a12d75fbae1ec32ef1f8fc6b6dd06601',
          address: '65.109.28.219:26656'
        },
        {
          id: 'b22f0708c6f393bf79acc0a6ca23643fe7d58391',
          address: '65.21.91.50:26656'
        },
        {
          id: 'e8f6d75ab37bf4f08c018f306416df1e138fd21c',
          address: '95.217.135.41:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-testnet-empower.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://empower-t.rpc.manticore.team:443/',
          provider: 'manticore'
        },
        {
          address: 'https://empower-testnet-rpc.polkachu.com/',
          provider: 'polkachu'
        }
      ],
      rest: [
        {
          address: 'https://api-testnet-empower.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://empower-t.api.manticore.team:443/',
          provider: 'manticore'
        },
        {
          address: 'https://empower-testnet-api.polkachu.com/',
          provider: 'polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://testnet.ping.pub/empower',
        tx_page: 'https://testnet.ping.pub/empower/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'evmostestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Evmos Testnet',
    chain_id: 'evmos_9000-4',
    bech32_prefix: 'evmos',
    daemon_name: 'evmosd',
    node_home: '$HOME/.evmosd',
    key_algos: ['ethsecp256k1'],
    extra_codecs: ['ethermint'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'atevmos',
          low_gas_price: 20000000000,
          average_gas_price: 25000000000,
          high_gas_price: 40000000000
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'atevmos'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/evmos/evmos',
      recommended_version: 'v10.0.0-rc4',
      compatible_versions: ['v10.0.0-rc4'],
      cosmos_sdk_version: '0.46',
      tendermint_version: '0.34',
      genesis: {
        genesis_url:
          'https://github.com/evmos/testnets/raw/main/evmos_9000-4/genesis.zip'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: 'b7635a113a52d0d25c82267de0648e71e46dc584',
          address: '167.99.182.201:46656',
          provider: 'coldy'
        },
        {
          id: '005efaae1ae29f95edea5f3729ce7e75511e5d3d',
          address: '65.108.225.158:13456',
          provider: 'Polkachu'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://evmos.test.rpc.coldyvalidator.net',
          provider: 'coldy'
        },
        {
          address: 'https://evmos-testnet-rpc.polkachu.com',
          provider: 'Polkachu'
        }
      ],
      rest: [
        {
          address: 'https://evmos.test.api.coldyvalidator.net',
          provider: 'coldy'
        },
        {
          address: 'https://evmos-testnet-api.polkachu.com',
          provider: 'Polkachu'
        }
      ],
      grpc: [
        {
          address: 'https://evmos.test.grpc.coldyvalidator.net',
          provider: 'coldy'
        }
      ]
    },
    explorers: [
      {
        kind: 'Mintscan',
        url: 'https://testnet.mintscan.io/evmos-testnet',
        tx_page: 'https://testnet.mintscan.io/evmos-testnet/txs/${txHash}'
      },
      {
        kind: 'NodesGuru',
        url: 'https://testnet.evmos.explorers.guru/',
        tx_page: 'https://testnet.evmos.explorers.guru/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'gitopiatestnet',
    chain_id: 'gitopia-janus-testnet-2',
    pretty_name: 'Gitopia Testnet',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'gitopia',
    daemon_name: 'gitopiad',
    node_home: '$HOME/.gitopia',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'utlore',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://gitopia.com/gitopia',
      recommended_version: 'v1.2.0',
      compatible_versions: ['v1.2.0'],
      genesis: {
        genesis_url:
          'https://server.gitopia.com/raw/gitopia/testnets/master/gitopia-janus-testnet-2/genesis.json.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '399d4e19186577b04c23296c4f7ecc53e61080cb',
          address: 'seed.gitopia.com:26656'
        }
      ],
      persistent_peers: [
        {
          id: '6146658ffe2d148524a9fdcc3d701440053442bf',
          address: 'gitopia-testnet.nodejumper.io:30656',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://gitopia-testnet.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://gitopia-testnet.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://gitopia-testnet.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorer.humans.zone',
        url: 'https://gitopia.explorers.guru/',
        tx_page: 'https://gitopia.explorers.guru/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'humanstestnet',
    chain_id: 'testnet-1',
    pretty_name: 'Humans AI Testnet',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'humans',
    daemon_name: 'humansd',
    node_home: '$HOME/.humans',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uheart',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/humansdotai/humans',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      genesis: {
        genesis_url: 'https://rpc-testnet.humans.zone/genesis'
      }
    },
    apis: {
      rpc: [
        {
          address: 'https://humans-testnet.nodejumper.io',
          provider: 'Nodejumper 🚀'
        }
      ],
      rest: [
        {
          address: 'https://humans-testnet.nodejumper.io:1317',
          provider: 'Nodejumper 🚀'
        }
      ],
      grpc: [
        {
          address: 'https://humans-testnet.nodejumper.io:9090',
          provider: 'Nodejumper 🚀'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorer.humans.zone',
        url: 'https://explorer.humans.zone/',
        tx_page: 'https://explorer.humans.zone/humans-testnet/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'hypersigntestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'hypersign',
    chain_id: 'jagrat',
    bech32_prefix: 'hid',
    daemon_name: 'hid-noded',
    node_home: '$HOME/.hid-node',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uhid',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.02,
          high_gas_price: 0.05
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/hypersign-protocol/hid-node',
      recommended_version: 'v0.1.5',
      compatible_versions: ['v0.1.5'],
      binaries: {
        'linux/amd64':
          'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-amd64.tar.gz',
        'linux/arm64':
          'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-linux-arm64.tar.gz',
        'darwin/arm64':
          'https://github.com/hypersign-protocol/hid-node/releases/download/v0.1.5/hid-noded-0.1.5-darwin-arm64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/hypersign-protocol/networks/master/testnet/jagrat/final_genesis.json'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: 'd7c9b9a3c3a6c5f4ccdfb37a8358755b277271c1',
          address: '3.110.226.164:26656',
          provider: 'hypersign'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.jagrat.hypersign.id',
          provider: 'hypersign'
        }
      ],
      rest: [
        {
          address: 'https://api.jagrat.hypersign.id',
          provider: 'hypersign'
        }
      ],
      grpc: [
        {
          address: 'grpc.jagrat.hypersign.id:5099',
          provider: 'hypersign'
        }
      ]
    },
    explorers: [
      {
        kind: 'Ping Pub',
        url: 'https://explorer.hypersign.id/hypersign-testnet',
        tx_page: 'https://explorer.hypersign.id/hypersign-testnet/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'imversedtestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Imversed Testnet',
    chain_id: 'imversed-test-1',
    bech32_prefix: 'imv',
    daemon_name: 'imversed',
    node_home: '$HOME/.imversed',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'nimv',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/imversed/imversed',
      recommended_version: 'v2.4.0',
      compatible_versions: ['v2.4.0'],
      binaries: {
        'linux/amd64': 'https://s.imversed.com/imversed_linux_amd64.tar.gz',
        'darwin/arm64': 'https://s.imversed.com/imversed_darwin_arm64.tar.gz',
        'darwin/amd64': 'https://s.imversed.com/imversed_darwin_amd64.tar.gz',
        'windows/amd64': 'https://s.imversed.com/imversed_windows_amd64.tar.gz'
      },
      genesis: {
        genesis_url: 'https://s.imversed.com/test-net/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '9b1ea21b9a1d098169c19e5d6bfa1397bba5c655',
          address: '34.133.39.91:26656',
          provider: 'imversed'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://tx-endpoint-test.imversed.com/',
          provider: 'imversed'
        }
      ],
      rest: [
        {
          address: 'https://query-endpoint-test.imversed.com/',
          provider: 'imversed'
        }
      ],
      grpc: [
        {
          address: 'http://qs.imversed.com:9090',
          provider: 'imversed'
        }
      ]
    },
    explorers: [
      {
        kind: 'Big Dipper',
        url: 'https://tex-s.imversed.com',
        tx_page: 'https://tex-s.imversed.com/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'jackaltestnet',
    chain_id: 'canine-1',
    website: 'https://jackalprotocol.com',
    pretty_name: 'Jackal',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'jkl',
    daemon_name: 'canined',
    node_home: '$HOME/.canine',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujkl',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/JackalLabs/canine-chain',
      recommended_version: 'v0.0.0-alpha.2',
      compatible_versions: ['v0.0.0-alpha.2'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/JackalLabs/woof/master/genesis/woof-final.json'
      },
      binaries: {
        'linux/amd64':
          'https://github.com/JackalLabs/canine-chain/releases/download/v0.0.0-alpha.2/canined-Linux',
        'darwin/amd64':
          'https://github.com/JackalLabs/canine-chain/releases/download/v0.0.0-alpha.2/canined-macOS'
      }
    },
    peers: {
      seeds: [
        {
          id: '052c498dd1cc603b4d32f772035b6a8ca902def3',
          address: '23.88.73.211:26656'
        },
        {
          id: '0bdeaaa237b41e3b964a027a110c6ab5bf561177',
          address: '209.34.206.38:26656'
        },
        {
          id: 'bf7ee27a24e7d5f45653206fbbda8c4b716b74b1',
          address: '89.58.38.59:26656'
        },
        {
          id: '9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab',
          address: '34.201.48.14:26656'
        },
        {
          id: 'bf62b185eef3c185f8ebf81d5cf54bdc064b21d8',
          address: '85.10.216.157:26656'
        },
        {
          id: '43e800018a5b52ba119a5410ff45cbeb63182cc8',
          address: '207.244.127.5:26656'
        },
        {
          id: '942087a9665e8235f8037d0b9d2a3f8a8c3d562b',
          address: '104.207.138.181:26656'
        },
        {
          id: '9d0094606fe8748f1c06b494f7c0cbbd44808ec6',
          address: '131.153.59.6:26656'
        },
        {
          id: '6071fe2fc7e4f49caa4b1fd1cfe19007152312e0',
          address: '34.76.87.33:26656'
        },
        {
          id: '3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768',
          address: '78.107.253.133:26656'
        },
        {
          id: '46cb18ca32ad7329cb82a10316087794ef12150f',
          address: '185.107.57.74:26656'
        }
      ],
      persistent_peers: [
        {
          id: '052c498dd1cc603b4d32f772035b6a8ca902def3',
          address: '23.88.73.211:26656'
        },
        {
          id: '0bdeaaa237b41e3b964a027a110c6ab5bf561177',
          address: '209.34.206.38:26656'
        },
        {
          id: 'bf7ee27a24e7d5f45653206fbbda8c4b716b74b1',
          address: '89.58.38.59:26656'
        },
        {
          id: '9eecc498dd2542c862f5bfb84ed7d2e1e3d922ab',
          address: '34.201.48.14:26656'
        },
        {
          id: 'bf62b185eef3c185f8ebf81d5cf54bdc064b21d8',
          address: '85.10.216.157:26656'
        },
        {
          id: '43e800018a5b52ba119a5410ff45cbeb63182cc8',
          address: '207.244.127.5:26656'
        },
        {
          id: '942087a9665e8235f8037d0b9d2a3f8a8c3d562b',
          address: '104.207.138.181:26656'
        },
        {
          id: '9d0094606fe8748f1c06b494f7c0cbbd44808ec6',
          address: '131.153.59.6:26656'
        },
        {
          id: '6071fe2fc7e4f49caa4b1fd1cfe19007152312e0',
          address: '34.76.87.33:26656'
        },
        {
          id: '3f58d7c35ad55ef6cea94f7aa2ffe79df1c01768',
          address: '78.107.253.133:26656'
        },
        {
          id: '46cb18ca32ad7329cb82a10316087794ef12150f',
          address: '185.107.57.74:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://testnet-rpc.jackalprotocol.com',
          provider: 'Jackal Labs'
        }
      ],
      rest: [
        {
          address: 'https://testnet-api.jackalprotocol.com',
          provider: 'Jackal Labs'
        }
      ],
      grpc: [
        {
          address: 'https://testnet-grpc.jackalprotocol.com',
          provider: 'Jackal Labs'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/jackal',
        tx_page: 'https://ping.pub/jackal/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'junotestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Juno Testnet',
    chain_id: 'uni-5',
    bech32_prefix: 'juno',
    daemon_name: 'junod',
    node_home: '$HOME/.juno',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ujunox',
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'ujunox'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/CosmosContracts/juno',
      recommended_version: 'v11.0.0-alpha',
      compatible_versions: ['v11.0.0-alpha'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.29',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-5/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '08bde9dda7cc7898b7426387281cdd492f4488af',
          address: 'tenderseed.ccvalidators.com:29003',
          provider: 'CryptoCrew'
        }
      ],
      persistent_peers: [
        {
          id: 'ed90921d43ede634043d152d7a87e8881fb85e90',
          address: '65.108.77.106:26709',
          provider: 'EZStaking.io'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.uni.junonetwork.io',
          provider: 'Juno'
        },
        {
          address: 'https://juno-testnet-rpc.polkachu.com',
          provider: 'Polkachu'
        }
      ],
      rest: [
        {
          address: 'https://api.uni.junonetwork.io',
          provider: 'Juno'
        },
        {
          address: 'https://juno-testnet-api.polkachu.com',
          provider: 'Polkachu'
        }
      ],
      grpc: [
        {
          address: 'juno-testnet-grpc.polkachu.com:12690',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'EZStaking Tools',
        url: 'https://testnet.ezstaking.tools/juno-testnet',
        tx_page: 'https://testnet.ezstaking.tools/juno-testnet/txs/${txHash}'
      },
      {
        kind: 'Mintscan',
        url: 'https://testnet.mintscan.io/juno-testnet',
        tx_page: 'https://testnet.mintscan.io/juno-testnet/txs/${txHash}'
      },
      {
        kind: 'NodesGuru',
        url: 'https://testnet.juno.explorers.guru/',
        tx_page: 'https://testnet.juno.explorers.guru/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'kichaintestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Ki',
    chain_id: 'kichain-t-4',
    bech32_prefix: 'tki',
    daemon_name: 'kid',
    node_home: '$HOME/.kid',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'utki',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/KiFoundation/ki-tools',
      recommended_version: 'Testnet-3.0.0-beta',
      compatible_versions: ['Testnet-3.0.0-beta'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Testnet/kichain-t-4/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '381dff5439ed042353c5333e61bab1510711f2f5',
          address: 'seed-testnet.blockchain.ki:6969',
          provider: 'kifoundation'
        }
      ],
      persistent_peers: [
        {
          id: '46b25d81510f8dcc535ca0924961b266e4f59244',
          address: '135.125.183.94:26656',
          provider: 'Community'
        },
        {
          id: 'ada3bbf64f963e764bfe003276354bd121e80ae0',
          address: '95.111.248.200:26656',
          provider: 'Community'
        },
        {
          id: '276f6fb420b3595b63c2a13d35868cb530a31578',
          address: '65.21.159.19:26656',
          provider: 'Community'
        },
        {
          id: '7e5710ee0b1576a78a21a89e1588b6c95ee69873',
          address: '194.163.137.193:26656',
          provider: 'Community'
        },
        {
          id: '323a5c9ccfb73573cbcd634c497b2a7405b198fa',
          address: '142.132.137.114:26656',
          provider: 'Community'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-challenge.blockchain.ki/',
          provider: 'kifoundation'
        }
      ],
      rest: [
        {
          address: 'https://api-challenge.blockchain.ki/',
          provider: 'kifoundation'
        }
      ]
    },
    explorers: [
      {
        kind: 'kifoundation',
        url: 'https://kichain-t-4.blockchain.ki/',
        tx_page: 'https://kichain-t-4.blockchain.ki/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'kujiratestnet',
    chain_id: 'harpoon-4',
    pretty_name: 'Kujira Harpoon',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'kujira',
    daemon_name: 'kujirad',
    node_home: '$HOME/.kujira',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ukuji',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Team-Kujira/core',
      recommended_version: 'v0.4.0',
      compatible_versions: ['v0.4.0'],
      genesis: {
        genesis_url:
          'https://github.com/Team-Kujira/networks/raw/master/testnet/harpoon-4.json'
      }
    },
    apis: {
      rpc: [
        {
          address: 'https://kujira-testnet-rpc.polkachu.com',
          provider: 'polkachu'
        }
      ],
      rest: [
        {
          address: 'https://kujira-testnet-api.polkachu.com/',
          provider: 'polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorers.guru',
        url: 'https://kujira.explorers.guru',
        tx_page: 'https://kujira.explorers.guru/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'kyvetestnet',
    chain_id: 'korellia',
    pretty_name: 'KYVE Korellia',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'kyve',
    daemon_name: 'chaind',
    node_home: '$HOME/.kyve',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'tkyve',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/KYVENetwork/chain',
      recommended_version: 'v0.6.3',
      compatible_versions: ['v0.6.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/KYVENetwork/chain/releases/download/v0.6.3/chain_linux_amd64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://github.com/KYVENetwork/chain/releases/download/v0.0.1/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '02dd2c26948ea758a25d3dbc91744f8897681652',
          address: '3.73.27.185:26656'
        }
      ],
      persistent_peers: [
        {
          id: '70556c82352b9919fb6f339b9da0ebc587e9148c',
          address: '3.68.232.117:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.korellia.kyve.network',
          provider: 'kyve'
        }
      ],
      rest: [
        {
          address: 'https://api.korellia.kyve.network',
          provider: 'kyve'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorers.guru',
        url: 'https://kyve.explorers.guru/',
        tx_page: 'https://kyve.explorers.guru/transaction/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'osmosistestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Osmosis Testnet',
    chain_id: 'osmo-test-4',
    bech32_prefix: 'osmo',
    daemon_name: 'osmosisd',
    node_home: '$HOME/.osmosisd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uosmo',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uosmo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/osmosis-labs/osmosis',
      recommended_version: 'v14.0.0-rc1',
      compatible_versions: ['v14.0.0-rc1'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.29',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url:
          'https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2'
      }
    },
    peers: {
      seeds: [
        {
          id: '0f9a9c694c46bd28ad9ad6126e923993fc6c56b1',
          address: '137.184.181.105:26656',
          provider: ''
        }
      ],
      persistent_peers: [
        {
          id: '4ab030b7fd75ed895c48bcc899b99c17a396736b',
          address: '137.184.190.127:26656',
          provider: ''
        },
        {
          id: '3dbffa30baab16cc8597df02945dcee0aa0a4581',
          address: '143.198.139.33:26656',
          provider: ''
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.osmo-test.ccvalidators.com/',
          provider: 'CryptoCrew'
        },
        {
          address: 'https://osmosistest-rpc.quickapi.com/',
          provider: 'ChainLayer'
        },
        {
          address: 'https://testnet-rpc.osmosis.zone/',
          provider: ''
        }
      ],
      rest: [
        {
          address: 'https://osmosistest-lcd.quickapi.com/',
          provider: 'CryptoCrew'
        },
        {
          address: 'https://lcd.osmo-test.ccvalidators.com/',
          provider: 'ChainLayer'
        },
        {
          address: 'https://testnet-rest.osmosis.zone/',
          provider: ''
        }
      ],
      grpc: [
        {
          address: 'https://grpc-test.osmosis.zone:443',
          provider: 'Osmosis'
        }
      ]
    },
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    },
    keywords: ['dex', 'testnet']
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'quasartestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Quasar Testnet',
    chain_id: 'qsr-questnet-03',
    bech32_prefix: 'quasar',
    daemon_name: 'quasarnoded',
    node_home: '$HOME/.quasarnoded',
    key_algos: ['secp256k1'],
    slip44: 118,
    staking: {
      staking_tokens: [
        {
          denom: 'uqsr'
        }
      ]
    },
    codebase: {
      recommended_version: 'v0.0.1-alpha-6',
      compatible_versions: ['v0.0.1-alpha-6'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.27',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/quasar-finance/questnet/main/v03/definitive-genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'testnet-seeds.polkachu.com:18256',
          provider: 'Polkachu'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'testnet-seed.rhinostake.com:18256',
          provider: 'Rhino Stake'
        }
      ],
      persistent_peers: [
        {
          id: 'b62efa878cc765b90b69f854ddccceae14e6cb50',
          address: '65.109.31.114:2490',
          provider: ''
        },
        {
          id: 'ade3f1571422dd5f0cef7907ada5794bfa8bc248',
          address: '141.94.138.48:26661',
          provider: ''
        },
        {
          id: '69614a94a585b798221b58b50a589e072222fa1d',
          address: '68.183.75.239:26656',
          provider: ''
        },
        {
          id: '86ae83ea917e3c6a6ccdc63801aba6223ff2cb51',
          address: '78.47.110.180:26656',
          provider: ''
        },
        {
          id: '7ed8e233e5fdb21bf70ac7f635130c7a8b0a4967',
          address: '185.209.228.188:26656',
          provider: ''
        },
        {
          id: '7ef67269c8ec37ff8a538a5ae83ca670fd2da686',
          address: '137.184.192.123:26656',
          provider: ''
        },
        {
          id: '8372d8ecb00d9c630407c3879c48718c3ec20114',
          address: '95.216.167.246:26656',
          provider: ''
        },
        {
          id: '68978b7482fc525ce40b4e7db1a9404e1909446f',
          address: '65.109.85.221:8090',
          provider: ''
        },
        {
          id: 'bba6e85e3d1f1d9c127324e71a982ddd86af9a99',
          address: '88.99.3.158:11256',
          provider: ''
        },
        {
          id: '8030efbc1270d4a85f58aa29ed8881ea8fc9de15',
          address: '49.12.213.67:26647',
          provider: ''
        },
        {
          id: '2fd143577ed10c696b2cea079e3c3c96c6e3c0c2',
          address: '18.169.67.74:26656',
          provider: ''
        },
        {
          id: 'aeac7879e1b44bee75a465fa9ca4538633259ddd',
          address: '34.175.250.71:26656',
          provider: ''
        },
        {
          id: 'fc027e3bd4f9852f2dd28b9211a4745a57ccbc78',
          address: '34.175.72.151:26656',
          provider: ''
        },
        {
          id: '20b4f9207cdc9d0310399f848f057621f7251846',
          address: '222.106.187.13:40606',
          provider: ''
        },
        {
          id: 'e8f8eed840b75db6c7924ce47250ea22b7d84d9a',
          address: '38.146.3.196:26656',
          provider: ''
        },
        {
          id: '20bdc06141e4afefc65af41e8c08ee0ae39a7b68',
          address: '65.108.105.48:18256',
          provider: ''
        },
        {
          id: 'dcf78ede935a42361895928d35119ed4789abb9c',
          address: '65.109.85.225:8090',
          provider: ''
        },
        {
          id: '598b2231accca2517c0dff839467846b48bbd53e',
          address: '65.109.90.178:18256',
          provider: ''
        },
        {
          id: '24ee42238d0d73fab10531cab025a8631ecef1aa',
          address: '83.33.82.186:26656',
          provider: ''
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://quasar-testnet-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-office.cosmostation.io/quasar-testnet/',
          provider: 'Cosmostation'
        },
        {
          address: 'https://questnet.quasar-finance.rhinostake.com/',
          provider: 'Rhino Stake'
        }
      ],
      rest: [
        {
          address: 'https://quasar-testnet-api.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://lcd-office.cosmostation.io/quasar-testnet/',
          provider: 'Cosmostation'
        }
      ],
      grpc: [
        {
          address: 'quasar-testnet-grpc.polkachu.com:18290',
          provider: 'Polkachu'
        }
      ]
    },
    keywords: ['testnet']
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'saagetestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Saage-Testnet',
    chain_id: 'saage-internal-testnet-1.3',
    bech32_prefix: 'saage',
    daemon_name: 'saaged',
    node_home: '$HOME/.saage',
    key_algos: ['secp256k1'],
    slip44: 909,
    fees: {
      fee_tokens: [
        {
          denom: 'usaage',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/saage-tech/saage-testnet-1',
      recommended_version: 'v0.4.1',
      compatible_versions: ['v0.4.1'],
      genesis: {
        genesis_url:
          'https://github.com/saage-tech/network-testnet-1/blob/master/networks/saage-testnet-3/genesis.json'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: 'e1fc6bc72db2c38e55751d350a72eba699a58f2d',
          address: '44.203.79.229:26656',
          provider: 'saage'
        },
        {
          id: '7ab5678c46266bdb294426de40e2b984e0af2917',
          address: '3.235.167.226:26656',
          provider: 'saage'
        },
        {
          id: 'ff661f7eacf9962bcd8a8aeb63bd8b9a3eee40bd',
          address: '52.202.79.213:26656',
          provider: 'saage'
        },
        {
          id: 'e0e5c42ce3d3c10359c566ffa217e2743048e8df',
          address: '54.226.144.104:26656',
          provider: 'saage'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://sentry.testnet.saage.io:26657/',
          provider: 'saage'
        }
      ],
      grpc: [
        {
          address: 'sentry.testnet.saage.io:9090',
          provider: 'saage'
        }
      ],
      rest: [
        {
          address: 'https://sentry.testnet.saage.io:1317/',
          provider: 'saage'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'http://blockexplorer-1.testnet.saage.io/',
        tx_page:
          'http://blockexplorer-1.testnet.saage.io/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'secretnetworktestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Secret Network',
    chain_id: 'pulsar-2',
    bech32_prefix: 'secret',
    daemon_name: 'secretd',
    node_home: '$HOME/.secretd',
    key_algos: ['secp256k1'],
    slip44: 529,
    fees: {
      fee_tokens: [
        {
          denom: 'uscrt',
          fixed_min_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/scrtlabs/SecretNetwork',
      recommended_version: 'v1.3.1',
      binaries: {
        'linux/amd64':
          'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb'
      },
      compatible_versions: ['v1.3.0', 'v1.3.1'],
      genesis: {
        genesis_url:
          'https://storage.googleapis.com/stakeordie-pulsar-2/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '7a421a6f5f1618f7b6fdfbe4854985746f85d263',
          address: '108.62.104.102:26656',
          provider: 'Community'
        },
        {
          id: 'a72e376dca664bac55e8ce55a2e972a8ae2c995e',
          address: '144.202.126.98:26656',
          provider: 'Community'
        },
        {
          id: 'f95ba3da4a9eec559397f4b47b1539e24af6904c',
          address: '52.190.249.47:26656',
          provider: 'Community'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.testnet.secretsaturn.net',
          provider: '𝕊ecret 𝕊aturn'
        },
        {
          address: 'https://rpc.pulsar.scrttestnet.com',
          provider: 'SCRT Testnet Committee'
        }
      ],
      rest: [
        {
          address: 'http://testnet.securesecrets.org:1317',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'https://lcd.testnet.secretsaturn.net',
          provider: '𝕊ecret 𝕊aturn'
        },
        {
          address: 'https://api.pulsar.scrttestnet.com',
          provider: 'SCRT Testnet Committee'
        }
      ],
      'grpc-web': [
        {
          address: 'https://grpc.testnet.secretsaturn.net',
          provider: '𝕊ecret 𝕊aturn'
        },
        {
          address: 'https://grpc.pulsar.scrttestnet.com',
          provider: 'SCRT Testnet Committee'
        }
      ]
    },
    explorers: [
      {
        kind: 'secret nodes',
        url: 'https://secretnodes.com/secret/chains/pulsar-2',
        tx_page:
          'https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://testnet.ping.pub/secret',
        tx_page: 'https://testnet.ping.pub/secret/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'seitestnet',
    chain_id: 'atlantic-1',
    pretty_name: 'Sei Atlantic',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'sei',
    daemon_name: 'seid',
    node_home: '$HOME/.sei',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'usei',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/sei-protocol/sei-chain',
      recommended_version: '1.0.6beta',
      compatible_versions: ['1.0.6beta'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/sei-protocol/testnet/main/sei-incentivized-testnet/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f',
          address: 'sei-testnet-seed.p2p.brocha.in:30514',
          provider: 'Brochain'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-sei-test.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://sei-testnet-rpc.brocha.in',
          provider: 'Brochain'
        }
      ],
      rest: [
        {
          address: 'https://rest-sei-test.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://sei-testnet-rest.brocha.in',
          provider: 'Brochain'
        }
      ]
    },
    explorers: [
      {
        kind: 'explorers.guru',
        url: 'https://sei.explorers.guru',
        tx_page: 'https://sei.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'Brochain',
        url: 'https://testnet-explorer.brocha.in/sei',
        tx_page: 'https://testnet-explorer.brocha.in/sei/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'stargazetestnet',
    status: 'live',
    network_type: 'testnet',
    website: 'https://stargaze.zone/',
    pretty_name: 'Stargaze',
    chain_id: 'elgafar-1',
    bech32_prefix: 'stars',
    daemon_name: 'starsd',
    node_home: '$HOME/.starsd',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ustars',
          low_gas_price: 0.03,
          average_gas_price: 0.04,
          high_gas_price: 0.05
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/public-awesome/stargaze',
      recommended_version: 'v7.0.0',
      compatible_versions: ['v7.0.0'],
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.28',
      cosmwasm_enabled: true,
      genesis: {
        genesis_url:
          'https://github.com/public-awesome/testnets/blob/main/elgafar-1/genesis/genesis.tar.gz'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: 'e31886cba90a06e165b0df18cc5c8ae015ecd23e',
          address: '209.159.152.82:26656',
          provider: 'stargaze'
        },
        {
          id: 'de00d2d65594b672469ecd65826a94ec1be80b9f',
          address: '208.73.205.226:26656',
          provider: 'stargaze'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.elgafar-1.stargaze-apis.com',
          provider: 'Stargaze Foundation'
        }
      ],
      rest: [
        {
          address: 'https://rest.elgafar-1.stargaze-apis.com',
          provider: 'Stargaze Foundation'
        }
      ],
      grpc: [
        {
          address: 'http://grpc-1.elgafar-1.stargaze-apis.com:26660',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'http://grpc-2.elgafar-1.stargaze-apis.com:26660',
          provider: 'Stargaze Foundation'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://testnet-explorer.publicawesome.dev/stargaze',
        tx_page:
          'https://testnet-explorer.publicawesome.dev/stargaze/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'statesettestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Stateset Testnet',
    chain_id: 'stateset-1-testnet',
    bech32_prefix: 'stateset',
    daemon_name: 'statesetd',
    node_home: '$HOME/.statesetd',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ustate',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/stateset/core',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64',
        'linux/arm64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64',
        'darwin/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64',
        'windows/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe'
      },
      genesis: {
        genesis_url: 'https://rpc.stateset.zone/genesis'
      }
    },
    peers: {
      seeds: [
        {
          id: 'DBC49AA829D16329C1772F7EF76730939E606A41',
          address: 'rpc.stateset.zone:26656',
          provider: 'stateset'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.stateset.zone/',
          provider: 'stateset'
        }
      ],
      rest: [
        {
          address: 'https://rest-api.stateset.zone',
          provider: 'stateset'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explore.stateset.zone',
        tx_page: 'https://explore.stateset.zone/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terpnettestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Terp-Network',
    chain_id: 'athena-3',
    bech32_prefix: 'terp',
    daemon_name: 'terp',
    node_home: '$HOME/.terp',
    codebase: {
      git_repo: 'github.com/terpnetwork/terp-core.git',
      recommended_version: 'v0.2.0-3-g2b8926a',
      tendermint_version: '0.34.23',
      compatible_versions: ['v0.2.0', 'v0.2.0-3-g2b8926a'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/terpnetwork/test-net/master/athena-3/genesis.json'
      },
      binaries: {
        'linux/amd64':
          'https://github.com/terpnetwork/terp-core/archive/refs/tags/v0.2.0.tar.gz'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: '15f5bc75be9746fd1f712ca046502cae8a0f6ce7',
          address: 'terp-testnet.nodejumper.io:30656'
        },
        {
          id: '53053de2ae170c1dadf655a4a37a566f82823784',
          address: '154.12.228.149:26656'
        },
        {
          id: '012dbc19c31c99c8a6a074868d5b6e9f57f8e100',
          address: '67.205.150.113:26656'
        },
        {
          id: '13bdd13e5bac6feb41d6c1b14f64f87b79504f0c',
          address: '192.145.37.8:33656'
        },
        {
          id: '9448fd1948d37a7ab22da486f18ed34c942fbb5c',
          address: '209.126.81.240:11656'
        },
        {
          id: '61a00940fde08cc55824e48bdfb92ba938ba9c25',
          address: '198.244.228.17:11656'
        },
        {
          id: 'f9d7b883594e651a45e91c49712151bf93322c08',
          address: '141.95.65.26:29456'
        },
        {
          id: '5d5bdd20b2bb2e4fc844b15ff8f5d640583b8ec8',
          address: '78.46.23.227:11656'
        },
        {
          id: '360c7c554ba16333b5901a2a341e466ad2c1db37',
          address: '146.19.24.52:33656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://terp-testnet.nodejumper.io:443/'
        },
        {
          address: 'https://terp-testnet.rpc.kjnodes.com:443/'
        },
        {
          address: 'https://terp-testnet.rpc.kjnodes.com:443/'
        },
        {
          address: 'https://terp-test-rpc.theamsolutions.info:443/'
        }
      ],
      rest: [
        {
          address: 'https://terp-testnet.nodejumper.io:1317/',
          provider: 'NodeJumper.io'
        },
        {
          address: 'https://api-t.terp.nodestake.top/',
          provider: 'NodeJumper.io'
        }
      ],
      grpc: [
        {
          address: 'grpc-t.terp.nodestake.top/',
          provider: 'nodestake'
        }
      ]
    },
    explorers: [
      {
        kind: 'Ping Pub',
        url: 'https://explorer.kjnodes.com/terp-test',
        tx_page: 'https://explorer.kjnodes.com/terp-test/tx/${txHash}'
      },
      {
        kind: 'Ping Pub',
        url: 'https://explorer.nodestake.top/terp-testnet',
        tx_page: 'https://explorer.nodestake.top/terp-testnet/tx/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../../chain.schema.json',
    chain_name: 'ulastestnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'ULAS',
    chain_id: 'ulas',
    bech32_prefix: 'ulas',
    daemon_name: 'ulasd',
    node_home: '$HOME/.ulas',
    codebase: {
      git_repo: 'https://github.com/ulasnetwork/ulas',
      recommended_version: 'v0.0.1',
      compatible_versions: ['v0.0.1'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/ulasnetwork/chain-config/main/ulas/genesis.json'
      }
    },
    apis: {
      rpc: [
        {
          address: 'http://65.49.204.199:26657',
          provider: 'UlasNetwork'
        }
      ],
      rest: [
        {
          address: 'http://65.49.204.199:1317',
          provider: 'UlasNetwork'
        }
      ],
      grpc: [
        {
          address: 'http://65.49.204.199:9090',
          provider: 'UlasNetwork'
        }
      ]
    },
    explorers: [
      {
        kind: 'ulas-scan',
        url: 'https://testnet-explorer.ulas.network',
        tx_page: 'https://testnet-explorer.ulas.network/ulas/tx/${txHash}'
      }
    ],
    slip44: 118
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'tgrade',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://tgrade.finance/',
    pretty_name: 'Tgrade',
    chain_id: 'tgrade-mainnet-1',
    bech32_prefix: 'tgrade',
    daemon_name: 'tgrade',
    node_home: '$HOME/.tgrade',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'utgd',
          fixed_min_gas_price: 0.05,
          low_gas_price: 0.05,
          average_gas_price: 0.075,
          high_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/confio/tgrade',
      recommended_version: 'v2.0.0',
      compatible_versions: ['v2.0.0'],
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/confio/tgrade-networks/main/mainnet-1/config/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '0c3b7d5a4253216de01b8642261d4e1e76aee9d8',
          address: '45.76.202.195:26656',
          provider: 'DSRV'
        }
      ],
      persistent_peers: [
        {
          id: '0a63421f67d02e7fb823ea6d6ceb8acf758df24d',
          address: '142.132.226.137:26656',
          provider: 'Confio'
        },
        {
          id: '4a319eead699418e974e8eed47c2de6332c3f825',
          address: '167.235.255.9:26656',
          provider: 'Confio'
        },
        {
          id: '6918efd409684d64694cac485dbcc27dfeea4f38',
          address: '49.12.240.203:26656',
          provider: 'Confio'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.mainnet-1.tgrade.confio.run',
          provider: 'Confio'
        },
        {
          address: 'https://rpc.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ],
      rest: [
        {
          address: 'https://api.mainnet-1.tgrade.confio.run',
          provider: 'Confio'
        },
        {
          address: 'https://lcd.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ],
      grpc: [
        {
          address: 'grpc.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ]
    },
    explorers: [
      {
        kind: 'aneka',
        url: 'https://tgrade.aneka.io',
        tx_page: 'https://tgrade.aneka.io/txs/${txHash}',
        account_page: 'https://tgrade.aneka.io/accounts/${accountAddress}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/tgrade',
        tx_page: 'https://www.mintscan.io/tgrade/txs/${txHash}',
        account_page: 'https://www.mintscan.io/tgrade/account/${accountAddress}'
      }
    ],
    logo_URIs: {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'thorchain',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://thorchain.org/',
    pretty_name: 'THORChain',
    chain_id: 'thorchain-mainnet-v1',
    bech32_prefix: 'thor',
    daemon_name: 'thord',
    node_home: '$HOME/.thornode',
    slip44: 931,
    codebase: {
      git_repo: 'https://gitlab.com/thorchain/thornode',
      recommended_version: 'chaosnet-multichain',
      compatible_versions: ['chaosnet-multichain'],
      genesis: {
        genesis_url: 'https://rpc.thorchain.info/genesis'
      }
    },
    peers: {
      seeds: [
        {
          id: 'eef0b258a711fc2be06da8eb25a53ebd8e16da62',
          address: '13.36.197.238:27146'
        },
        {
          id: '02041c659d8588f225b3352df8636e05dcd239f7',
          address: '18.169.114.61:27146'
        },
        {
          id: '88783fa86645c41aaaf031f31df2ee1d74413880',
          address: '18.202.205.93:27146'
        },
        {
          id: '00783ce232787999a7b3ccdfdbd493f371203e60',
          address: '51.136.76.139:27146'
        },
        {
          id: 'c3f3f920a7003585ea6489344b41dd248ffa1e8f',
          address: '188.166.204.206:27146'
        },
        {
          id: '46040fd7b9450772c43fa406ef821d5eb3f79114',
          address: '134.209.136.64:27146'
        },
        {
          id: '7581fbca995486787ac3619cddf4137e110aff11',
          address: '143.198.247.31:27146'
        },
        {
          id: 'dcd52d42ee465dd23b5806b30eca8df8e9e76c5d',
          address: '138.197.48.191:27146'
        },
        {
          id: '3a520c0e7c2af48d33cfb425af9ea9caa5917b1e',
          address: '18.214.28.114:27146'
        },
        {
          id: '48b675fbb3bf968ebee7e366d72bb5580aa8162e',
          address: '139.59.217.54:27146'
        },
        {
          id: 'f1513684dd9d574715304bf3dd3b53fbcce65909',
          address: '34.145.173.217:27146'
        },
        {
          id: '2dde4b30bf913c9b9adecb6b835b2654b50c5698',
          address: '3.124.212.184:27146'
        },
        {
          id: '97ab3ae9df723ef763d90128663e7de0f0568dbe',
          address: '54.217.4.198:27146'
        },
        {
          id: '7c3b0a1fd70c5c0154e40f6e1276f8dd171117e5',
          address: '136.244.65.26:27146'
        },
        {
          id: '79b84e53bd5e4c1a3ef309346136cc7528ba0bdf',
          address: '64.225.81.243:27146'
        },
        {
          id: 'd8628418e84acf19a330dddbed3173cfb4a020a9',
          address: '138.197.48.59:27146'
        },
        {
          id: '7c884bbc48abbadbb0fb85bfaa1dff9e94eac401',
          address: '143.244.211.46:27146'
        },
        {
          id: '8757a66381b4182f74809461fd8a3fcaf203a820',
          address: '34.212.187.195:27146'
        },
        {
          id: '6a35ed1a50ee76f72d1cd5c688f2e5f7fbc5da25',
          address: '52.228.231.228:27146'
        },
        {
          id: '5842bbfc26cf87c2ae3db418a835511ef2a39277',
          address: '3.96.249.116:27146'
        },
        {
          id: '83d3c662b1287bc9292d75b4909cff63b119cc78',
          address: '18.206.141.33:27146'
        },
        {
          id: '14d576eb4a1a5a2e319511abd5ce2c6e20f51c31',
          address: '13.36.138.187:27146'
        },
        {
          id: '107d49ada5acf1dbfcc27b3f5f387d035421ccca',
          address: '52.214.221.72:27146'
        },
        {
          id: 'ca15ae8f0e17112b63786482cca300ff473f41fd',
          address: '3.140.128.35:27146'
        },
        {
          id: '5e89caf0ca79e0fb3371d5892efd96d66042d0d6',
          address: '157.90.34.75:27146'
        },
        {
          id: '1c88aa9509832a592453bd7d30736db055a279d1',
          address: '34.83.232.180:27146'
        },
        {
          id: 'de7c36a34d8e9a48106488de1bac21b172c2dd49',
          address: '157.245.16.34:27146'
        },
        {
          id: '3de5f5bff746dc9349b044d83ccb906924b8cf03',
          address: '188.166.138.88:27146'
        },
        {
          id: '3ede6d36ede3b7e1dec522c827ab6db94bfae749',
          address: '34.145.160.5:27146'
        },
        {
          id: '58a28719fdd46ea629859d85a1d5bc6a6363c185',
          address: '159.65.212.234:27146'
        },
        {
          id: '70dd6252ff95d8af7f3f488fdb98dde5d467213b',
          address: '18.117.49.201:27146'
        },
        {
          id: '6c7d780bb7384142f6943543ed4c3ba537f4a411',
          address: '138.197.59.244:27146'
        },
        {
          id: '523a3df9384190d1b30ff55d1783b4baed32165c',
          address: '18.208.113.188:27146'
        },
        {
          id: 'c64b58f2498a29330e4927ba90dd6fb2955a7a56',
          address: '159.89.210.106:27146'
        },
        {
          id: 'e592368bf73a32dbcc28def417f2fdb151f26da6',
          address: '3.139.117.117:27146'
        },
        {
          id: '19ab508b32a6518a450058c2c7a99b7a5cc4299f',
          address: '13.237.27.250:27146'
        },
        {
          id: '4e41bd4f8d1ec95ff4a305f0739c82e818664c12',
          address: '135.181.58.7:27146'
        },
        {
          id: '2d25606076036716a31611185d39880fe8237e97',
          address: '3.230.67.253:27146'
        },
        {
          id: '5a6e66f9f6c84d55de8f1170086f28d69d242ad4',
          address: '78.141.210.66:27146'
        },
        {
          id: 'f296c1e1b03ab875925208aabb5b9c5b1626427e',
          address: '52.32.91.52:27146'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.thorchain.info',
          provider: 'thorchain'
        }
      ],
      rest: [
        {
          address: 'https://thornode.thorchain.info',
          provider: 'thorchain'
        }
      ],
      sidechains_rpc: [
        {
          address: 'https://btc.thorchain.info',
          provider: 'btc'
        },
        {
          address: 'https://bch.thorchain.info',
          provider: 'bch'
        },
        {
          address: 'https://ltc.thorchain.info',
          provider: 'ltc'
        },
        {
          address: 'https://bnb.thorchain.info',
          provider: 'bnb'
        },
        {
          address: 'https://eth.thorchain.info',
          provider: 'eth'
        }
      ]
    },
    explorers: [
      {
        kind: 'THORChain explorer',
        url: 'https://thorchain.net',
        tx_page: 'https://thorchain.net/#/txs/${txHash}'
      },
      {
        kind: 'viewblock',
        url: 'https://viewblock.io/thorchain',
        tx_page: 'https://viewblock.io/thorchain/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'umee',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://www.umee.cc/',
    pretty_name: 'Umee',
    chain_id: 'umee-1',
    bech32_prefix: 'umee',
    daemon_name: 'umeed',
    node_home: '$HOME/.umee',
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uumee',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/umee-network/umee',
      recommended_version: 'v3.3.0',
      compatible_versions: ['v3.3.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/umee-network/umee/releases/download/v3.3.0/umeed-v3.3.0-linux-amd64'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'umee.mainnet.seed.autostake.net:26756',
          provider: 'AutoStake 🛡️ Slash Protected'
        },
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13656',
          provider: 'Polkachu'
        },
        {
          id: '86bd5cb6e762f673f1706e5889e039d5406b4b90',
          address: 'umee.seed.node75.org:10656',
          provider: 'Pro-Nodes75'
        }
      ],
      persistent_peers: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:13656',
          provider: 'Polkachu'
        },
        {
          id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
          address: 'umee.mainnet.peer.autostake.net:26756',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.barnacle.mainnet.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://umee-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-umee-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'http://rpc-umee-0.node75.org:26657',
          provider: 'Pro-Nodes75'
        }
      ],
      rest: [
        {
          address: 'https://api.barnacle.mainnet.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api-umee-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://umee-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://umee.mainnet.lcd.autostake.net:443',
          provider: 'AutoStake 🛡️ Slash Protected'
        }
      ],
      grpc: [
        {
          address: 'grpc-umee-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'umee-grpc.polkachu.com:13690',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/umee/',
        tx_page: 'https://www.mintscan.io/umee/txs/${txHash}',
        account_page: 'https://www.mintscan.io/umee/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/umee',
        tx_page: 'https://ping.pub/umee/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://umee.explorers.guru',
        tx_page: 'https://umee.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/umee',
        tx_page: 'https://atomscan.com/umee/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'unification',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://unification.com/',
    pretty_name: 'Unification',
    chain_id: 'FUND-MainNet-2',
    bech32_prefix: 'und',
    daemon_name: 'und',
    node_home: '$HOME/.und_mainchain',
    slip44: 5555,
    codebase: {
      git_repo: 'https://github.com/unification-com/mainchain',
      recommended_version: 'v1.6.3',
      compatible_versions: ['v1.6.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/unification-com/mainchain/releases/download/v1.6.3/und_v1.6.3_linux_x86_64.tar.gz'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/unification-com/mainnet/master/latest/genesis.json > $HOME/.und_mainchain/config/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '0c2b65bc604a18a490f5f55bb7b4140cfb512ced',
          address: 'seed1.unification.io:26656'
        },
        {
          id: 'e66e0f89af19da09f676c85b262d591b8c2bb9d8',
          address: 'seed2.unification.io:26656'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc1.unification.io:443',
          provider: 'Unification'
        },
        {
          address: 'https://rpc.unification.chainmasters.ninja/',
          provider: 'Chainmasters'
        }
      ],
      rest: [
        {
          address: 'https://rest.unification.io',
          provider: 'Unification'
        },
        {
          address: 'https://rest.unification.chainmasters.ninja/',
          provider: 'Chainmasters'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.unification.io',
          provider: 'Unification'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explorer.unification.io/',
        tx_page: 'https://explorer.unification.io/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.unification.chainmasters.ninja/unification',
        tx_page:
          'https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'vidulum',
    status: 'live',
    network_type: 'mainnet',
    website: 'https://vidulum.app/',
    pretty_name: 'Vidulum',
    chain_id: 'vidulum-1',
    bech32_prefix: 'vdl',
    daemon_name: 'vidulumd',
    node_home: '$HOME/.vidulum',
    key_algos: ['secp256k1'],
    slip44: 370,
    fees: {
      fee_tokens: [
        {
          denom: 'uvdl',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/vidulum/mainnet',
      recommended_version: 'v1.2.0',
      compatible_versions: ['v1.2.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_amd64.tar.gz',
        'linux/arm64':
          'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_darwin_amd64.tar.gz',
        'windows/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.2.0/vidulum_windows_amd64.zip'
      },
      genesis: {
        genesis_url:
          'https://raw.githubusercontent.com/vidulum/mainnet/main/genesis.json'
      }
    },
    peers: {
      seeds: [
        {
          id: '883ec7d5af7222c206674c20c997ccc5c242b38b',
          address: 'ec2-3-82-120-39.compute-1.amazonaws.com:26656',
          provider: 'notional'
        }
      ],
      persistent_peers: [
        {
          id: '3bf3d98dfd4000dd5ff8189882a9f96848b99b87',
          address: '137.220.60.196:26656',
          provider: 'vidulum'
        },
        {
          id: '7a44ea6ecb59b0e4bd01b58a75163ec64b164bb4',
          address: '63.210.148.24:26656',
          provider: 'vidulum'
        },
        {
          id: '52051fef449e76eb399966312f523e8e5e27490b',
          address: '95.217.118.211:26656',
          provider: 'minerpool'
        },
        {
          id: 'cae7d9d21c1752300277eab72d861b0c6638b2e3',
          address: '164.68.119.151:26656',
          provider: 'bluebird'
        },
        {
          id: '209688f5bccb88f6397a97cc11ab545a014aa559',
          address: '137.184.92.115:26656',
          provider: '1square'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet-rpc.vidulum.app/',
          provider: 'vidulum'
        },
        {
          address: 'https://rpc-vidulum-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://mainnet-lcd.vidulum.app',
          provider: 'vidulum'
        },
        {
          address: 'https://api-vidulum-ia.cosmosia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-vidulum-ia.cosmosia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://explorers.vidulum.app/vidulum',
        tx_page: 'https://explorers.vidulum.app/vidulum/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/vidulum',
        tx_page: 'https://ping.pub/vidulum/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/vidulum',
        tx_page: 'https://atomscan.com/vidulum/transactions/${txHash}'
      }
    ]
  }
];
export default chains;
