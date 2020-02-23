import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_1 - https://github.com/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://github.com/",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"tz": "Asia%2FShanghai",
					"ignored_unsupported_browser_notice": "false",
					"user_session": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"__Host-user_session_same_site": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_device_id": "d9f621439bf2a7ec0d8ff0cefd6272ea",
					"has_recent_activity": "1",
					"_gat": "1",
					"_gh_sess": "h5LW%2FDciw4zGoqRlvrM6k2Gsj5LEX%2FmjoTD2HZk0ZnNdzmgRWa1CFDNb1qVHFWbeLi%2BVB5noRbEi%2FTgbVKklmIWdfX3Cs6Cda%2F1JiQ1xqrwl1b5jfPQi7vywp875c54vkHrPHvM9d0dA3qBW1g4IEjQhsQLFauzF7Z6ebE5sE9DO%2F0YuAMcS%2Fn2bDjmbZFTRnRVLk0X%2BQD0om6HrMwE46IRvekzrO70toZ%2BTVvnzVSQPkiomsHJS43eOMuHNYeMZHOko7zAKFHSkO14kr%2B1JMQ6VfpRSxX%2BATtnUpSbckg9tBiIDnJTsfIEUy8bcJHIv%2FMGAA4UToHJTQZLnLel5GBn1TmEcnI7XyCzwJxGQXWXXOQ4cAp2c2p%2FfkwdA3WnDpUiAWF54bThn2hHeKgIBbopsQ%2BQoDDOBIXLKm7Mn3nE5ePuuHLT25atkiZIC8Jh1O39ElShRzDyZcVfMuqDUL2DgNb1E3HPipptoZbgjmtPkYQUfviIr7MfrbaxW4pNAPHMS08o2hvPi9Jl5wThah7ZtINWRoHb6YVruZIHYa4w%2BAOAO2YKUinnhwow4xRC0eLB9NGHPRqdRrp1VHK8Qi6qT41vFlJPxeekv5bL35Z7AQEr7ubcwrE%2FPywikhv6Y%2BtBkeWIdWPMXOBTwqoeZ7%2BmWgV5fYhqEZDOl6SPPSGMHjL2mLLbfVLmthzZP1UonYt3vH6vBerPzNc3m3vCAcU%2FxmXu3xhEVjwnVB1Y9HUhX%2BSdHFsOgL37rOysIkf7FXPam6hZ3oY9%2Bqkyk0w%2FwoPxuLqDl5%2FiQWYgHkGnl%2FDkvipq9PXcEeRoZ10mKosANtkH2%2B%2BtXCmmhr3HuaOy1IqiLu%2FHvdQAYFgqeZM1nBPGpE8fw2cJlZHl8TTat4zJiwWL1r3lq2Q2%2Bs8kk1u7lvdpmHTvT%2BcTGPU0i0S8ZGFeUnNCS8lkBs3TkMw2VTeQkL%2BuFJbaPcruAKyQkTcbZbUEtoO%2FDmDEJFrXEHV5iVq5no3vBZTJQ5DH3JLjmtYW9%2Fos%2FMYgEd7xKT%2FJTwzM9fNEjCCza%2FFtrjOQsbfMGNxic4y0%2FDqR%2Fhf724XKb%2BsQ7OxrxvzfZXb7E%2B03Tz8q2esP85Hx7gJzGtuU58vFjGXy6NRRuLbakP2c1LFVcZHK48Lh4U3Y5TXeTfJ9qGaVTV4wFrJNjE0zfy2igY1UT%2Bs%2FZvOVGhqCSbwvHw2TGFXHj66wkUc69UuF5pFWEone8uQluB9%2B7Q5u5UJDohhXurLCfCkgH%2BonXWmUxPzzZAX81Fg9EIux6uclRdrPY1yJhCxxAa2uCfSwT9yLAPWN4Drf7kRpp5kwGImW9ZZrC42VgME4ufDT4uDdlPGgjXAWgDwo76QGpznhQDCAWrrPOjDUl4S7ybBsg4tv5WRb0tceFMfraV7Uex7zD80%2B9Baorau4iiKECFWCfxnkkhfLu5bI541fHOKx47RU1El041E8M%2BeNXoYo4GLhmRHkbUbzYcoDNnc5j8VDFnrOQQMbSdoqvmz2D%2F2E9GvjBQT%2F7rTAOCyPSucYuJclPMFdYCiA1I7yJykd9ytLdu5Qvilp9bKRwqgsdgqOl4KO7HT%2Bxwz9EDf30XB0wcC8CN5DrptZDvtD6H8kqSwjuDqG9usHsHcfpGsoudzcshVsUoc6RKzYqfyC%2BNflJx42MmjDlmwFiJA%2BoVK7s165562zrs5ntfadVoIFb6EiYFU5faGkdoaZNRhAUwf%2Bggo%2BFjAEkb1UEwREKMAkwkHqSgX1ExYbylpL7lGln4ND0WiENuCEI%2B1p1DNOGc%2FfDlsYy4Uc8jfKVqtVEnykTujYkkSj5G5Wu%2BNvfiZeKMEZpJ%2B7zljM0AFVcAAkz52WzqA7HXhX4bJ0NMwzYaWIIQWhoPrxXQnVyxW1F2SQG%2FlLftzrs6fDNX61Y7YyI7NCicv%2FOiltKV8WSoR5LsYlOeWwfaFvKsIP8KAgnxmJYTBWir%2BQpqpyI6wUrGD1QAkPtsgv%2B%2B4S%2Fn9pxDp9OID%2FIqivZmri6DxnPU%2FPpzzEem6TY%2FJFtyxnG0Hax36vC1w%3D%3D--RLxSXKa1HbCBzmgl--YFerlbUFSka4HeuzYilx%2FQ%3D%3D"
				},
				"headers": {
					"Host": "github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "document",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"Sec-Fetch-Site": "none",
					"Sec-Fetch-Mode": "navigate",
					"Sec-Fetch-User": "?1",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.27);
		req = [{
			"method": "get",
			"url": "https://github.githubassets.com/assets/frameworks-6548d5a1dd84bd83036c6a914b25b4ae.css",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"origin": "https://github.com",
					"sec-fetch-dest": "style",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/github-5e64e8d03c0e9b09c20abaf4b8c4181d.css",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"origin": "https://github.com",
					"sec-fetch-dest": "style",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/images/search-key-slash.svg",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/images/spinners/octocat-spinner-128.gif",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars2.githubusercontent.com/u/3184441?s=60&v=4",
			"params": {
				"headers": {
					"Host": "avatars2.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars1.githubusercontent.com/u/3184441?s=40&v=4",
			"params": {
				"headers": {
					"Host": "avatars1.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/images/spinners/octocat-spinner-64.gif",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/images/modules/site/gitmerge_2020.png",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/frameworks-7313fe29.js",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"origin": "https://github.com",
					"sec-fetch-dest": "script",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/github-bootstrap-af33dd3f.js",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"origin": "https://github.com",
					"sec-fetch-dest": "script",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/assets/dashboard-bootstrap-fbc2a62b.js",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"origin": "https://github.com",
					"sec-fetch-dest": "script",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(33.09);
		req = [{
			"method": "get",
			"url": "https://github.githubassets.com/images/modules/jobs/logo.png",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.githubassets.com/assets/github-5e64e8d03c0e9b09c20abaf4b8c4181d.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(19.65);
		req = [{
			"method": "get",
			"url": "https://github.com/users/linksgo2011/feature_preview/indicator_check.json",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"tz": "Asia%2FShanghai",
					"ignored_unsupported_browser_notice": "false",
					"user_session": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"__Host-user_session_same_site": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_device_id": "d9f621439bf2a7ec0d8ff0cefd6272ea",
					"has_recent_activity": "1",
					"_gat": "1",
					"_gh_sess": "fw4t8vwj1NfPUaq8yJPqg1y2ePmlfD937L1%2FkjYR4xE1oPmzfEYA9PRn%2BDrU%2FQTF9wK%2FtzVfYvwAqg%2BN8KWEaOovs8aITV7L5FlH47mJYIZtcmdaSmcYp8dCEvyZZW93QsVUv0CYL21Q30hvaSS0SZi1Ldt86E21tmKQ3WNDcs%2F0jys6putJLen5At7yQwQGLpWrfO4DbdfFIhiedgLRKEAyhgdXCwoJASNQXegDWOzb2uu7YDPRA45ijkDT1g1pM0Hqe4mjN6K2zT4bXaWmrGXqvQzFgBe55Ixxkypo425jrDpq7IENoig30j2DzQh91zrAEXXI%2BM%2BgnZ7%2BHozctWcfd2Loow62yj3IHtoIlWQfv6Y86b4ai2npO1n%2FygBifnHBgeXrXvjhgHsn3EHuQ9%2BCKVgcmnD31iggqYTE0wObeV16uUKPUdZ%2B6w9IJqdYuuOOKyl8qc0QjoUgqOEQznMr3eOEfPMqHxyiD6zKYJsauFx0XMFqyyKJW0QosXIRCgfFuBAUqUebZBwdbWDXO7t%2F%2FpF1V%2FKif23cvvLXyMk3htqwcs%2Bf4220cW9%2F72JIaMPT5rkA10uguy3Q270hLLSkW63FnsmMga6sjvHzrdBsXQtWWPUCu%2FPuQm6qG7AMoinKLciXouoc9iUvNAI7I%2FU0PvG2BseYXiGFHHBjYlHrP9SVv4axD8AuqkeERhiUjbFZeARoST9n9L%2F80J7CQIsxlM9UQI%2B9a17x%2F2JqW46CT%2B%2BRGlFz8TkxIEVfFhSpi53YYZxjPy0W3GPqTZXAWFCi%2BcIGdlolCPy%2B0wUM7RiowNr%2BaxyU7ZeoKhEdn6fs1c%2F%2FlI3jxriCHrg4BDWM1m%2FQFVrENC5cjj03yA9icl%2FAZm55xcQeBSjyJ4kgfy6Pt3hoSA%2FiwTEkuUvFGD1dmkhiUERNLezaL5hMVeAe85RQ3I2SJsrB%2F05cCWWLZEAZEw0ZdxxMDKhaZaeyaTdSi5zSGz3oeJnM84hEzi4rZ7GIi9jU4gu1mBeKcunN%2F0Y1P0IwfDUKW8cPEA1yYCzIaR4Qmxvv2YNGk98vsanAnKMlbP%2BzRaVL7DogWdz1SbSWIyMyr1cgHVt7XJF5hCFP9KZVyTQ5pJJ6GYCzgDvFuwQCgmF1j%2BfVTxLu9PlaHhWsXJF8ey8LRk5XuQwZZQbOC7AjpxK7E7%2BGE549IK0K1OXM1LYg015GhLXGkt4h7RYyouP8PXA1jKoJiWKLODR1Ws0q812CvKOwG6%2FoBDUInYPT3IKOooBzk71KQ8BmiqTfECHnRVBQpayTpNn3Qa%2BnGR4%2F%2Bwk0YvyGTfBNh2vFn1tfbvRqui9RzV0x6AplCup6pAZbNyaHm4Zx%2B3UDKLQUwh5C4mwTet0M%2B6Q14n%2BsxfdGrdWhUxaQWPG1SAYi4BL4EzW1%2BeSVcwg08YTr3iJNIPBa%2Bh9ZmTH81yFIIzXTWCIdVSZLFgEJ7WNbSB2GLguODxn3NXtwv7IfLQFEOA0LDSb1PevZrnex3ID%2FX38NYvDmw8LuqB6ONLmBcOoalDSkE4m2iE0P8ifLvb3EdlsGbYgdN%2BgoR6c26PXixtTgpf3%2FulaqDyFViovmBSqkni53955Pqza3Ny2wNAYHyYm%2BAlNka3M6h7880rFKtzfYuqAD8kzLqRIKj7vfL5tQfb1pA%2Fb6axlLH1pQKbdGyMA8itqlPH7IbOzRxq4xZ1YDG97tje%2FJlqDbBhiUEnefxvRwoTIuLefEzKlOX5PoZEcARLah8OYygnQTfkbDDiRvOieJMko8adh6a%2Fi7%2B%2F0m0ZQSJlg%2FnOB7edJXhwuCRviR%2FvdqgtBNOS7%2BapfYbSk7s%2FVLYqvVxBrIv1vSgXS6T%2F%2BUAERpfHAYWNBkoxpLXPs9GBsnvJ1m79l5UAb%2B2522R3po4Z63n5LvLfM%2Bq97rJz5kpOoUD8SHC3RD8fJAaqyl2mazm3puWMuXckdMXzoY5jWhNGxMw1fk9%2FTUs7A%2F%2BMCNYdrc3BjqYcdpWC1OcXBXuxnI%2FBzGhc%2BNefL0e02U%2BK%2FOgFmPzIjm12RjAXo5kELqoviA8Q%3D%3D--Hii4bT8lgtAFdm6z--0U24O9FMN%2BeM3GliuMBRng%3D%3D"
				},
				"headers": {
					"Host": "github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "post",
			"url": "https://www.google-analytics.com/collect",
			"body": "v=1&_v=j48&a=1615153497&t=event&ni=1&_s=1&dl=https%3A%2F%2Fgithub.com%2Fdashboard&ul=zh-cn&de=UTF-8&dt=(masked)&sd=24-bit&sr=1440x900&vp=1425x315&je=0&ec=Dashboard&ea=view&el=Git%20Merge%202020%20notice&_u=SCCAAEABM~&jid=&cid=1525751744.1537025637&uid=0d79aab8fb7be3db72a483be1c84d5ee&tid=UA-3769691-2&cd1=Logged%20In&z=723483976",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"content-type": "text/plain;charset=UTF-8",
					"accept": "*/*",
					"origin": "https://github.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "post",
			"url": "https://collector.githubapp.com/collect",
			"body": {
				"v": "1",
				"_v": "j48",
				"a": "1615153497",
				"t": "event",
				"ni": "1",
				"_s": "1",
				"dl": "https://github.com/dashboard",
				"ul": "zh-cn",
				"de": "UTF-8",
				"dt": "(masked)",
				"sd": "24-bit",
				"sr": "1440x900",
				"vp": "1425x315",
				"je": "0",
				"ec": "Dashboard",
				"ea": "view",
				"el": "Git Merge 2020 notice",
				"_u": "SCCAAEABM~",
				"jid": "",
				"cid": "1525751744.1537025637",
				"uid": "0d79aab8fb7be3db72a483be1c84d5ee",
				"tid": "UA-3769691-2",
				"cd1": "Logged In",
				"z": "723483976"
			},
			"params": {
				"headers": {
					"Host": "collector.githubapp.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Content-Type": "application/x-www-form-urlencoded",
					"Accept": "*/*",
					"Origin": "https://github.com",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "post",
			"url": "https://www.google-analytics.com/collect",
			"body": "v=1&_v=j48&a=1615153497&t=pageview&_s=2&dl=https%3A%2F%2Fgithub.com%2Fdashboard&ul=zh-cn&de=UTF-8&dt=(masked)&sd=24-bit&sr=1440x900&vp=1425x315&je=0&_u=SCCAAEABM~&jid=&cid=1525751744.1537025637&uid=0d79aab8fb7be3db72a483be1c84d5ee&tid=UA-3769691-2&cd1=Logged%20In&z=1807260724",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-fetch-dest": "empty",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"content-type": "text/plain;charset=UTF-8",
					"accept": "*/*",
					"origin": "https://github.com",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/dashboard-feed",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"tz": "Asia%2FShanghai",
					"ignored_unsupported_browser_notice": "false",
					"user_session": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"__Host-user_session_same_site": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_device_id": "d9f621439bf2a7ec0d8ff0cefd6272ea",
					"has_recent_activity": "1",
					"_gat": "1",
					"_gh_sess": "fw4t8vwj1NfPUaq8yJPqg1y2ePmlfD937L1%2FkjYR4xE1oPmzfEYA9PRn%2BDrU%2FQTF9wK%2FtzVfYvwAqg%2BN8KWEaOovs8aITV7L5FlH47mJYIZtcmdaSmcYp8dCEvyZZW93QsVUv0CYL21Q30hvaSS0SZi1Ldt86E21tmKQ3WNDcs%2F0jys6putJLen5At7yQwQGLpWrfO4DbdfFIhiedgLRKEAyhgdXCwoJASNQXegDWOzb2uu7YDPRA45ijkDT1g1pM0Hqe4mjN6K2zT4bXaWmrGXqvQzFgBe55Ixxkypo425jrDpq7IENoig30j2DzQh91zrAEXXI%2BM%2BgnZ7%2BHozctWcfd2Loow62yj3IHtoIlWQfv6Y86b4ai2npO1n%2FygBifnHBgeXrXvjhgHsn3EHuQ9%2BCKVgcmnD31iggqYTE0wObeV16uUKPUdZ%2B6w9IJqdYuuOOKyl8qc0QjoUgqOEQznMr3eOEfPMqHxyiD6zKYJsauFx0XMFqyyKJW0QosXIRCgfFuBAUqUebZBwdbWDXO7t%2F%2FpF1V%2FKif23cvvLXyMk3htqwcs%2Bf4220cW9%2F72JIaMPT5rkA10uguy3Q270hLLSkW63FnsmMga6sjvHzrdBsXQtWWPUCu%2FPuQm6qG7AMoinKLciXouoc9iUvNAI7I%2FU0PvG2BseYXiGFHHBjYlHrP9SVv4axD8AuqkeERhiUjbFZeARoST9n9L%2F80J7CQIsxlM9UQI%2B9a17x%2F2JqW46CT%2B%2BRGlFz8TkxIEVfFhSpi53YYZxjPy0W3GPqTZXAWFCi%2BcIGdlolCPy%2B0wUM7RiowNr%2BaxyU7ZeoKhEdn6fs1c%2F%2FlI3jxriCHrg4BDWM1m%2FQFVrENC5cjj03yA9icl%2FAZm55xcQeBSjyJ4kgfy6Pt3hoSA%2FiwTEkuUvFGD1dmkhiUERNLezaL5hMVeAe85RQ3I2SJsrB%2F05cCWWLZEAZEw0ZdxxMDKhaZaeyaTdSi5zSGz3oeJnM84hEzi4rZ7GIi9jU4gu1mBeKcunN%2F0Y1P0IwfDUKW8cPEA1yYCzIaR4Qmxvv2YNGk98vsanAnKMlbP%2BzRaVL7DogWdz1SbSWIyMyr1cgHVt7XJF5hCFP9KZVyTQ5pJJ6GYCzgDvFuwQCgmF1j%2BfVTxLu9PlaHhWsXJF8ey8LRk5XuQwZZQbOC7AjpxK7E7%2BGE549IK0K1OXM1LYg015GhLXGkt4h7RYyouP8PXA1jKoJiWKLODR1Ws0q812CvKOwG6%2FoBDUInYPT3IKOooBzk71KQ8BmiqTfECHnRVBQpayTpNn3Qa%2BnGR4%2F%2Bwk0YvyGTfBNh2vFn1tfbvRqui9RzV0x6AplCup6pAZbNyaHm4Zx%2B3UDKLQUwh5C4mwTet0M%2B6Q14n%2BsxfdGrdWhUxaQWPG1SAYi4BL4EzW1%2BeSVcwg08YTr3iJNIPBa%2Bh9ZmTH81yFIIzXTWCIdVSZLFgEJ7WNbSB2GLguODxn3NXtwv7IfLQFEOA0LDSb1PevZrnex3ID%2FX38NYvDmw8LuqB6ONLmBcOoalDSkE4m2iE0P8ifLvb3EdlsGbYgdN%2BgoR6c26PXixtTgpf3%2FulaqDyFViovmBSqkni53955Pqza3Ny2wNAYHyYm%2BAlNka3M6h7880rFKtzfYuqAD8kzLqRIKj7vfL5tQfb1pA%2Fb6axlLH1pQKbdGyMA8itqlPH7IbOzRxq4xZ1YDG97tje%2FJlqDbBhiUEnefxvRwoTIuLefEzKlOX5PoZEcARLah8OYygnQTfkbDDiRvOieJMko8adh6a%2Fi7%2B%2F0m0ZQSJlg%2FnOB7edJXhwuCRviR%2FvdqgtBNOS7%2BapfYbSk7s%2FVLYqvVxBrIv1vSgXS6T%2F%2BUAERpfHAYWNBkoxpLXPs9GBsnvJ1m79l5UAb%2B2522R3po4Z63n5LvLfM%2Bq97rJz5kpOoUD8SHC3RD8fJAaqyl2mazm3puWMuXckdMXzoY5jWhNGxMw1fk9%2FTUs7A%2F%2BMCNYdrc3BjqYcdpWC1OcXBXuxnI%2FBzGhc%2BNefL0e02U%2BK%2FOgFmPzIjm12RjAXo5kELqoviA8Q%3D%3D--Hii4bT8lgtAFdm6z--0U24O9FMN%2BeM3GliuMBRng%3D%3D"
				},
				"headers": {
					"Host": "github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/dashboard/recent-activity",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"tz": "Asia%2FShanghai",
					"ignored_unsupported_browser_notice": "false",
					"user_session": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"__Host-user_session_same_site": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_device_id": "d9f621439bf2a7ec0d8ff0cefd6272ea",
					"has_recent_activity": "1",
					"_gat": "1",
					"_gh_sess": "fw4t8vwj1NfPUaq8yJPqg1y2ePmlfD937L1%2FkjYR4xE1oPmzfEYA9PRn%2BDrU%2FQTF9wK%2FtzVfYvwAqg%2BN8KWEaOovs8aITV7L5FlH47mJYIZtcmdaSmcYp8dCEvyZZW93QsVUv0CYL21Q30hvaSS0SZi1Ldt86E21tmKQ3WNDcs%2F0jys6putJLen5At7yQwQGLpWrfO4DbdfFIhiedgLRKEAyhgdXCwoJASNQXegDWOzb2uu7YDPRA45ijkDT1g1pM0Hqe4mjN6K2zT4bXaWmrGXqvQzFgBe55Ixxkypo425jrDpq7IENoig30j2DzQh91zrAEXXI%2BM%2BgnZ7%2BHozctWcfd2Loow62yj3IHtoIlWQfv6Y86b4ai2npO1n%2FygBifnHBgeXrXvjhgHsn3EHuQ9%2BCKVgcmnD31iggqYTE0wObeV16uUKPUdZ%2B6w9IJqdYuuOOKyl8qc0QjoUgqOEQznMr3eOEfPMqHxyiD6zKYJsauFx0XMFqyyKJW0QosXIRCgfFuBAUqUebZBwdbWDXO7t%2F%2FpF1V%2FKif23cvvLXyMk3htqwcs%2Bf4220cW9%2F72JIaMPT5rkA10uguy3Q270hLLSkW63FnsmMga6sjvHzrdBsXQtWWPUCu%2FPuQm6qG7AMoinKLciXouoc9iUvNAI7I%2FU0PvG2BseYXiGFHHBjYlHrP9SVv4axD8AuqkeERhiUjbFZeARoST9n9L%2F80J7CQIsxlM9UQI%2B9a17x%2F2JqW46CT%2B%2BRGlFz8TkxIEVfFhSpi53YYZxjPy0W3GPqTZXAWFCi%2BcIGdlolCPy%2B0wUM7RiowNr%2BaxyU7ZeoKhEdn6fs1c%2F%2FlI3jxriCHrg4BDWM1m%2FQFVrENC5cjj03yA9icl%2FAZm55xcQeBSjyJ4kgfy6Pt3hoSA%2FiwTEkuUvFGD1dmkhiUERNLezaL5hMVeAe85RQ3I2SJsrB%2F05cCWWLZEAZEw0ZdxxMDKhaZaeyaTdSi5zSGz3oeJnM84hEzi4rZ7GIi9jU4gu1mBeKcunN%2F0Y1P0IwfDUKW8cPEA1yYCzIaR4Qmxvv2YNGk98vsanAnKMlbP%2BzRaVL7DogWdz1SbSWIyMyr1cgHVt7XJF5hCFP9KZVyTQ5pJJ6GYCzgDvFuwQCgmF1j%2BfVTxLu9PlaHhWsXJF8ey8LRk5XuQwZZQbOC7AjpxK7E7%2BGE549IK0K1OXM1LYg015GhLXGkt4h7RYyouP8PXA1jKoJiWKLODR1Ws0q812CvKOwG6%2FoBDUInYPT3IKOooBzk71KQ8BmiqTfECHnRVBQpayTpNn3Qa%2BnGR4%2F%2Bwk0YvyGTfBNh2vFn1tfbvRqui9RzV0x6AplCup6pAZbNyaHm4Zx%2B3UDKLQUwh5C4mwTet0M%2B6Q14n%2BsxfdGrdWhUxaQWPG1SAYi4BL4EzW1%2BeSVcwg08YTr3iJNIPBa%2Bh9ZmTH81yFIIzXTWCIdVSZLFgEJ7WNbSB2GLguODxn3NXtwv7IfLQFEOA0LDSb1PevZrnex3ID%2FX38NYvDmw8LuqB6ONLmBcOoalDSkE4m2iE0P8ifLvb3EdlsGbYgdN%2BgoR6c26PXixtTgpf3%2FulaqDyFViovmBSqkni53955Pqza3Ny2wNAYHyYm%2BAlNka3M6h7880rFKtzfYuqAD8kzLqRIKj7vfL5tQfb1pA%2Fb6axlLH1pQKbdGyMA8itqlPH7IbOzRxq4xZ1YDG97tje%2FJlqDbBhiUEnefxvRwoTIuLefEzKlOX5PoZEcARLah8OYygnQTfkbDDiRvOieJMko8adh6a%2Fi7%2B%2F0m0ZQSJlg%2FnOB7edJXhwuCRviR%2FvdqgtBNOS7%2BapfYbSk7s%2FVLYqvVxBrIv1vSgXS6T%2F%2BUAERpfHAYWNBkoxpLXPs9GBsnvJ1m79l5UAb%2B2522R3po4Z63n5LvLfM%2Bq97rJz5kpOoUD8SHC3RD8fJAaqyl2mazm3puWMuXckdMXzoY5jWhNGxMw1fk9%2FTUs7A%2F%2BMCNYdrc3BjqYcdpWC1OcXBXuxnI%2FBzGhc%2BNefL0e02U%2BK%2FOgFmPzIjm12RjAXo5kELqoviA8Q%3D%3D--Hii4bT8lgtAFdm6z--0U24O9FMN%2BeM3GliuMBRng%3D%3D"
				},
				"headers": {
					"Host": "github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Sec-Fetch-Dest": "empty",
					"X-Requested-With": "XMLHttpRequest",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://collector.githubapp.com/github/page_view?dimensions[page]=https%3A%2F%2Fgithub.com%2F&dimensions[title]=GitHub&dimensions[referrer]=&dimensions[user_agent]=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_1)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F80.0.3987.106%20Safari%2F537.36&dimensions[screen_resolution]=1440x900&dimensions[pixel_ratio]=2&dimensions[browser_resolution]=1440x315&dimensions[tz_seconds]=28800&dimensions[timestamp]=1582466339928&&dimensions[request_id]=6350%3A27AE%3A649285%3A8E9AAD%3A5E5284ED&dimensions[visitor_id]=7450942028648359523&dimensions[region_edge]=ap-southeast-1&dimensions[region_render]=iad&dimensions[ga_id]=1525751744.1537025637&&measures[performance_timing]=1-39-39-54520-34625-34624-34624-1293-39-39-39--54520-0---42-1553-1278--1287-1287&&dimensions[actor_id]=3184441&dimensions[actor_login]=linksgo2011&dimensions[actor_hash]=106ba33c993c9ec310834fb3ea012cb436676423a6d7257088a60c3c3257ed8c&dimensions[cid]=1734807628.1537025635",
			"params": {
				"headers": {
					"Host": "collector.githubapp.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.com/manifest.json",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"tz": "Asia%2FShanghai",
					"ignored_unsupported_browser_notice": "false",
					"user_session": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"__Host-user_session_same_site": "BUfBP8w72bcERXmM7FdzR2oI2TOHCjVN7OekliYpjqduOOKK",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_device_id": "d9f621439bf2a7ec0d8ff0cefd6272ea",
					"has_recent_activity": "1",
					"_gat": "1",
					"_gh_sess": "fw4t8vwj1NfPUaq8yJPqg1y2ePmlfD937L1%2FkjYR4xE1oPmzfEYA9PRn%2BDrU%2FQTF9wK%2FtzVfYvwAqg%2BN8KWEaOovs8aITV7L5FlH47mJYIZtcmdaSmcYp8dCEvyZZW93QsVUv0CYL21Q30hvaSS0SZi1Ldt86E21tmKQ3WNDcs%2F0jys6putJLen5At7yQwQGLpWrfO4DbdfFIhiedgLRKEAyhgdXCwoJASNQXegDWOzb2uu7YDPRA45ijkDT1g1pM0Hqe4mjN6K2zT4bXaWmrGXqvQzFgBe55Ixxkypo425jrDpq7IENoig30j2DzQh91zrAEXXI%2BM%2BgnZ7%2BHozctWcfd2Loow62yj3IHtoIlWQfv6Y86b4ai2npO1n%2FygBifnHBgeXrXvjhgHsn3EHuQ9%2BCKVgcmnD31iggqYTE0wObeV16uUKPUdZ%2B6w9IJqdYuuOOKyl8qc0QjoUgqOEQznMr3eOEfPMqHxyiD6zKYJsauFx0XMFqyyKJW0QosXIRCgfFuBAUqUebZBwdbWDXO7t%2F%2FpF1V%2FKif23cvvLXyMk3htqwcs%2Bf4220cW9%2F72JIaMPT5rkA10uguy3Q270hLLSkW63FnsmMga6sjvHzrdBsXQtWWPUCu%2FPuQm6qG7AMoinKLciXouoc9iUvNAI7I%2FU0PvG2BseYXiGFHHBjYlHrP9SVv4axD8AuqkeERhiUjbFZeARoST9n9L%2F80J7CQIsxlM9UQI%2B9a17x%2F2JqW46CT%2B%2BRGlFz8TkxIEVfFhSpi53YYZxjPy0W3GPqTZXAWFCi%2BcIGdlolCPy%2B0wUM7RiowNr%2BaxyU7ZeoKhEdn6fs1c%2F%2FlI3jxriCHrg4BDWM1m%2FQFVrENC5cjj03yA9icl%2FAZm55xcQeBSjyJ4kgfy6Pt3hoSA%2FiwTEkuUvFGD1dmkhiUERNLezaL5hMVeAe85RQ3I2SJsrB%2F05cCWWLZEAZEw0ZdxxMDKhaZaeyaTdSi5zSGz3oeJnM84hEzi4rZ7GIi9jU4gu1mBeKcunN%2F0Y1P0IwfDUKW8cPEA1yYCzIaR4Qmxvv2YNGk98vsanAnKMlbP%2BzRaVL7DogWdz1SbSWIyMyr1cgHVt7XJF5hCFP9KZVyTQ5pJJ6GYCzgDvFuwQCgmF1j%2BfVTxLu9PlaHhWsXJF8ey8LRk5XuQwZZQbOC7AjpxK7E7%2BGE549IK0K1OXM1LYg015GhLXGkt4h7RYyouP8PXA1jKoJiWKLODR1Ws0q812CvKOwG6%2FoBDUInYPT3IKOooBzk71KQ8BmiqTfECHnRVBQpayTpNn3Qa%2BnGR4%2F%2Bwk0YvyGTfBNh2vFn1tfbvRqui9RzV0x6AplCup6pAZbNyaHm4Zx%2B3UDKLQUwh5C4mwTet0M%2B6Q14n%2BsxfdGrdWhUxaQWPG1SAYi4BL4EzW1%2BeSVcwg08YTr3iJNIPBa%2Bh9ZmTH81yFIIzXTWCIdVSZLFgEJ7WNbSB2GLguODxn3NXtwv7IfLQFEOA0LDSb1PevZrnex3ID%2FX38NYvDmw8LuqB6ONLmBcOoalDSkE4m2iE0P8ifLvb3EdlsGbYgdN%2BgoR6c26PXixtTgpf3%2FulaqDyFViovmBSqkni53955Pqza3Ny2wNAYHyYm%2BAlNka3M6h7880rFKtzfYuqAD8kzLqRIKj7vfL5tQfb1pA%2Fb6axlLH1pQKbdGyMA8itqlPH7IbOzRxq4xZ1YDG97tje%2FJlqDbBhiUEnefxvRwoTIuLefEzKlOX5PoZEcARLah8OYygnQTfkbDDiRvOieJMko8adh6a%2Fi7%2B%2F0m0ZQSJlg%2FnOB7edJXhwuCRviR%2FvdqgtBNOS7%2BapfYbSk7s%2FVLYqvVxBrIv1vSgXS6T%2F%2BUAERpfHAYWNBkoxpLXPs9GBsnvJ1m79l5UAb%2B2522R3po4Z63n5LvLfM%2Bq97rJz5kpOoUD8SHC3RD8fJAaqyl2mazm3puWMuXckdMXzoY5jWhNGxMw1fk9%2FTUs7A%2F%2BMCNYdrc3BjqYcdpWC1OcXBXuxnI%2FBzGhc%2BNefL0e02U%2BK%2FOgFmPzIjm12RjAXo5kELqoviA8Q%3D%3D--Hii4bT8lgtAFdm6z--0U24O9FMN%2BeM3GliuMBRng%3D%3D"
				},
				"headers": {
					"Host": "github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "manifest",
					"Accept": "*/*",
					"Sec-Fetch-Site": "same-origin",
					"Sec-Fetch-Mode": "cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://github.githubassets.com/favicon.ico",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "cross-site",
					"sec-fetch-mode": "no-cors",
					"referer": "https://github.com/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "wss://live.github.com/_sockets/VjI6MzYyNTA0ODE4OmUzNGM4ZDY2ODBiYjNmYTY4Yzc1ZmE5NTM0YjM4YjM5NDE5ZmQ3ZGU5NjA2ZmQ2MTRhYmRkMTdkNjdkZmJlMTA=--f4c0327e43f5b973b0d540b4397198ec8b9936bb",
			"params": {
				"headers": {
					"Pragma": "no-cache",
					"Origin": "https://github.com",
					"Accept-Encoding": "gzip, deflate, br",
					"Host": "live.github.com",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7",
					"Sec-WebSocket-Key": "dTGz9uBrzo/FyG6D1MnxRw==",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Upgrade": "websocket",
					"Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
					"Cache-Control": "no-cache",
					"Connection": "Upgrade",
					"Sec-WebSocket-Version": "13"
				}
			}
		}];
		res = http.batch(req);
		sleep(3.41);
		req = [{
			"method": "get",
			"url": "https://avatars1.githubusercontent.com/u/8828854?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars1.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars0.githubusercontent.com/u/4997466?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars0.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars1.githubusercontent.com/u/138192?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars1.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars2.githubusercontent.com/u/472311?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars2.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars0.githubusercontent.com/u/1726429?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars0.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars0.githubusercontent.com/u/5636512?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars0.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars0.githubusercontent.com/u/1787798?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars0.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		},{
			"method": "get",
			"url": "https://avatars0.githubusercontent.com/u/22769957?s=64&v=4",
			"params": {
				"headers": {
					"Host": "avatars0.githubusercontent.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Sec-Fetch-Dest": "image",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Sec-Fetch-Site": "cross-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(260.78);
		req = [{
			"method": "post",
			"url": "https://api.github.com/_private/browser/stats",
			"body": "{\"stats\":[{\"resourceTimings\":[{\"name\":\"https://github.githubassets.com/assets/frameworks-6548d5a1dd84bd83036c6a914b25b4ae.css\",\"entryType\":\"resource\",\"startTime\":1307.7749999938533,\"duration\":4795.225000008941},{\"name\":\"https://github.githubassets.com/assets/github-5e64e8d03c0e9b09c20abaf4b8c4181d.css\",\"entryType\":\"resource\",\"startTime\":1308.0550000013318,\"duration\":20275.129999994533},{\"name\":\"https://github.githubassets.com/images/search-key-slash.svg\",\"entryType\":\"resource\",\"startTime\":1308.3349999797065,\"duration\":1077.9400000174064},{\"name\":\"https://github.githubassets.com/images/spinners/octocat-spinner-128.gif\",\"entryType\":\"resource\",\"startTime\":1308.5549999959767,\"duration\":9274.14999998291},{\"name\":\"https://avatars2.githubusercontent.com/u/3184441?s=60&v=4\",\"entryType\":\"resource\",\"startTime\":1308.7550000054762,\"duration\":422.66499999095686},{\"name\":\"https://avatars1.githubusercontent.com/u/3184441?s=40&v=4\",\"entryType\":\"resource\",\"startTime\":1525.259999994887,\"duration\":356.9150000112131},{\"name\":\"https://github.githubassets.com/images/spinners/octocat-spinner-64.gif\",\"entryType\":\"resource\",\"startTime\":1526.0399999970105,\"duration\":9748.220000008587},{\"name\":\"https://github.githubassets.com/images/modules/site/gitmerge_2020.png\",\"entryType\":\"resource\",\"startTime\":1526.2349999975413,\"duration\":11177.700000000186},{\"name\":\"https://github.githubassets.com/assets/frameworks-7313fe29.js\",\"entryType\":\"resource\",\"startTime\":1553.090000001248,\"duration\":33054.26000000443},{\"name\":\"https://github.githubassets.com/assets/github-bootstrap-af33dd3f.js\",\"entryType\":\"resource\",\"startTime\":1553.3849999774247,\"duration\":52672.19000001205},{\"name\":\"https://github.githubassets.com/assets/dashboard-bootstrap-fbc2a62b.js\",\"entryType\":\"resource\",\"startTime\":1553.5950000048615,\"duration\":52959.039999987},{\"name\":\"https://github.githubassets.com/images/modules/jobs/logo.png\",\"entryType\":\"resource\",\"startTime\":34640.63499998883,\"duration\":2030.6900000141468},{\"name\":\"https://github.com/users/linksgo2011/feature_preview/indicator_check.json\",\"entryType\":\"resource\",\"startTime\":54293.81000000285,\"duration\":407.3550000030082},{\"name\":\"https://www.google-analytics.com/collect\",\"entryType\":\"resource\",\"startTime\":54296.82999997749,\"duration\":120.65000002621673},{\"name\":\"https://www.google-analytics.com/collect\",\"entryType\":\"resource\",\"startTime\":54302.52499997732,\"duration\":120.2750000229571}],\"timestamp\":1582466340356},{\"navigationTimings\":[{\"entryType\":\"navigation\",\"startTime\":0,\"duration\":54529.134999989765}],\"timestamp\":1582466340356}]}",
			"params": {
				"cookies": {
					"_octo": "GH1.1.1734807628.1537025635",
					"_ga": "GA1.2.1525751744.1537025637",
					"logged_in": "yes",
					"dotcom_user": "linksgo2011",
					"_gat": "1"
				},
				"headers": {
					"Host": "api.github.com",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Sec-Fetch-Dest": "empty",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36",
					"Content-Type": "text/plain;charset=UTF-8",
					"Accept": "*/*",
					"Origin": "https://github.com",
					"Sec-Fetch-Site": "same-site",
					"Sec-Fetch-Mode": "no-cors",
					"Referer": "https://github.com/",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,es;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
