import React, { useCallback, useState } from "react";

export function CreatePassword() {
    const [length, setLength] = useState("");
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [special, setSpecial] = useState(false);
    const [numeric, setNumeric] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword =  useCallback (() => {
        let pass = "";
        let str = "";

        if (!length || length < 8 || length > 30) {
            alert("Enter the password length in between 8 to 30");
            return;
        } else if (!uppercase && !lowercase && !special && !numeric) {
            alert("Please check at least one checkbox");
            return;
        }

        if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
        if (special) str += `!@#$%^&*()_+=-{}|[]\\:;\"'<>,.?/`;
        if (numeric) str += "0123456789";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [lowercase, uppercase, numeric, special, length, password]);

    return (
        <>
            <h1>Generate Your Password</h1>
            <p>Select Password length (8-30 characters)</p>
            <input
                type="text"
                placeholder="Enter the length"
                style={{ width: "10rem" }}
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />
            <h2>Customize your Password by these Checkboxes</h2>
            <div>
                <div>
                    <label htmlFor="uppercase">Include Upper-case Alphabet</label>
                    <input
                        type="checkbox"
                        id="uppercase"
                        checked={uppercase}
                        onChange={(e) => setUppercase(e.target.checked)}
                    />
                </div>
                <div>
                    <label htmlFor="lowercase">Include Lower-case Alphabet</label>
                    <input
                        type="checkbox"
                        id="lowercase"
                        checked={lowercase}
                        onChange={(e) => setLowercase(e.target.checked)}
                    />
                </div>
                <div>
                    <label htmlFor="special">Include Special Character</label>
                    <input
                        type="checkbox"
                        id="special"
                        checked={special}
                        onChange={(e) => setSpecial(e.target.checked)}
                    />
                </div>
                <div>
                    <label htmlFor="numeric">Include Numeric Value</label>
                    <input
                        type="checkbox"
                        id="numeric"
                        checked={numeric}
                        onChange={(e) => setNumeric(e.target.checked)}
                    />
                </div>
            </div>
            <button
                style={{
                    borderRadius: "8px",
                    padding: "0.5rem 1rem",
                    marginTop: "1rem",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "1.5rem"
                }}
                onClick={generatePassword}
            >
                Get the Password
            </button>
            <br /><br />
            <input value={password} readOnly />
        </>
    );
}
