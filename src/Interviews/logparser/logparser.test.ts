import { logParser, readLogLine } from "./logparser";

it('converts to json', () => {
    let input = `2021-10-20T12:43:34.000Z 2021-10-20T12:43:35.000Z info back-end-3 ac->ad
2021-10-20T12:43:33.000Z 2021-10-20T12:43:36.000Z info back-end-1 aa->ac
2021-10-20T12:43:38.000Z 2021-10-20T12:43:40.000Z info back-end-2 aa->ab
2021-10-20T12:43:32.000Z 2021-10-20T12:43:42.000Z info front-end null->aa`

    let expected = {
        "id": "info",
        "root": {
            "service": "front-end",
            "start": "2021-10-20T12:43:32.000Z",
            "end": "2021-10-20T12:43:42.000Z",
            "calls": [
                {
                    "service": "back-end-1",
                    "start": "2021-10-20T12:43:33.000Z",
                    "end": "2021-10-20T12:43:36.000Z",
                    "calls": [
                        {
                            "service": "back-end-3",
                            "start": "2021-10-20T12:43:34.000Z",
                            "end": "2021-10-20T12:43:35.000Z",
                            "calls": [],
                            "span": "ad"
                        }
                    ],
                    "span": "ac"
                },
                {
                    "service": "back-end-2",
                    "start": "2021-10-20T12:43:38.000Z",
                    "end": "2021-10-20T12:43:40.000Z",
                    "calls": [],
                    "span": "ab"
                }
            ],
            "span": "aa"
        }
    }
    expect(logParser(input)[0]).toMatchObject(expected)
});

it('converts single line', () => {
    let input = "2021-10-20T12:43:32.000Z 2021-10-20T12:43:42.000Z info front-end null->aa"
    let expected = {
        "id": "info",
        "start": "2021-10-20T12:43:32.000Z",
        "end": "2021-10-20T12:43:42.000Z",
        "service": "front-end",
        "span": "aa",
        "spanRoot": "null"
    };
    expect(readLogLine(input)).toEqual(expected)
})