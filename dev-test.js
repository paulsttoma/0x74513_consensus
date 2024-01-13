const Block = require("./block");

const Xblock = Block.addBlock(Block.genesisBlock(), "ABCD");

console.log(Xblock.toString());