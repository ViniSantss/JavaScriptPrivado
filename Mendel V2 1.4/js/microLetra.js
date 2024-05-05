
function microLetter(Str){
    const Micro = {
        A: "ᵃ", B: "ᵇ", C: "ᶜ", D: "ᵈ", E: "ᵉ",
        F: "ᶠ", G: "ᵍ", H: "ʰ", I: "ᶦ", J: "ʲ",
        K: "ᵏ", L: "ˡ", M: "ᵐ", N: "ⁿ", O: "ᵒ",
        P: "ᵖ", Q: "ᑫ", R: "ʳ", S: "ˢ", T: "ᵗ",
        U: "ᵘ", V: "ᵛ", W: "ʷ", X: "ˣ", Y: "ʸ",
        Z: "ᶻ"
    };

var result = Str.replace(/[A-Z]/g, matchedLetter => Micro[matchedLetter]);

return(result)
}