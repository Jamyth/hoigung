import { stdin } from "mock-stdin";

const instance = stdin();

const Keys = {
    UP: "\u001b[A",
    DOWN: "\u001b[B",
    LEFT: "\u001b[D",
    RIGHT: "\u001b[C",
    ENTER: "\n",
    SPACE: " ",
};

function send(...input: string[]) {
    process.nextTick(() => {
        input.forEach((_) => instance.send(_));
        instance.send(Keys.ENTER);
    });
}

export const StdinUtil = Object.freeze({
    send,
    Keys,
});
