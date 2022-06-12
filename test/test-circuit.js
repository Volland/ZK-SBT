const path = require("path");
const wasm_tester = require("circom_tester").wasm;

describe("testing verify-claim circuit", function () {
    let circuit;

    this.timeout(10000000);

    before(async() => {
        circuit = await wasm_tester(path.join(__dirname, "../circuits", "verify.circom"));
    });

    it("Should verify query and claim signature", async () => {

        const inputs = {"claim":["180410020913331409885634153623124536270","0","25","0","0","0","328613907243889777235018884535160632327","0"],"sigR8x":"13692340849919074629431384397504503745238970557428973719013760553241945274451","sigR8y":"18066895302190271072509218697462294016350129302467595054878773027470753683267","sigS":"238898180964301975640138172772451490757586081215817420470161945050687067203","pubKeyX":"9582165609074695838007712438814613121302719752874385708394134542816240804696","pubKeyY":"18271435592817415588213874506882839610978320325722319742324814767882756910515","claimSchema":"180410020913331409885634153623124536270","slotIndex":2,"operator":3,"value":[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
        const expOut = {"sigR8x":"13692340849919074629431384397504503745238970557428973719013760553241945274451","sigR8y":"18066895302190271072509218697462294016350129302467595054878773027470753683267","sigS":"238898180964301975640138172772451490757586081215817420470161945050687067203","pubKeyX":"9582165609074695838007712438814613121302719752874385708394134542816240804696","pubKeyY":"18271435592817415588213874506882839610978320325722319742324814767882756910515","claimSchema":"180410020913331409885634153623124536270","slotIndex":2,"operator":3,"value":[18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}

        const w = await circuit.calculateWitness(inputs, true);
        await circuit.assertOut(w, expOut);
    });
    

});