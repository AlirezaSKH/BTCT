{
    "pairs": {
        "poloniex": {
            "BTC_ETH": {
                "strategy": "emotionless",
                "override": {}
            }
        },
        "bittrex": {
            "BTC-ETC": {
                "strategy": "emotionless",
                "override": {}
            }
        },
        "kraken": {
            "XETHXXBT": {
                "strategy": "emotionless",
                "override": {}
            },
            "GNOXBT": {
                "strategy": "emotionless",
                "override": {}
            },
            "XXBTZEUR": {
                "strategy": "emotionless",
                "override": {}
            }
        },
        "cryptopia": {
            "DOGE_BTC": {
                "strategy": "emotionless",
                "override": {}
            }
        },
        "bitfinex": {
            "IOT-BTC": {
                "strategy": "emotionless",
                "override": {}
            }
        }
    },
    "strategies": {
        "emotionless": {
            "NAME": "emotionless",
            "TRADING_LIMIT": 0.01,
	    "MICROTRADES": true,
            "PANIC_SELL": false,
            "DOUBLE_UP": false,
            "DOUBLE_UP_CAP": 1,
            "MIN_VOLUME_TO_BUY": 0.0001,
            "MIN_VOLUME_TO_SELL": 0.0001
        }

    },
    "exchanges": {
        "bittrex": {
            "key": "",
            "secret": ""
        },
        "poloniex": {
            "key": "",
            "secret": ""
        },
        "kraken": {
            "key": "",
            "secret": ""
        },
        "cryptopia": {
            "key": "",
            "secret": ""
        },
        "bitfinex": {
            "key": "",
            "secret": ""
        }
    },
    "bot": {
        "BOT_DELAY": 1,
	"BOT_CCLEAN": 999,
        "interval_ticker_update": 25000,
        "period_storage_ticker": 2000,
        "timeout_buy": 60000,
        "timeout_sell": 60000,
        "VERBOSE": true,
        "WATCH_MODE": false
    },
    "ws": {
        "port": 5001,
        "clientport": 3000,
        "hostname": "127.0.0.1"
    },
    "imap_listener": {
        "enabled": false
        
    }
}
