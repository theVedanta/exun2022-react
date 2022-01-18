import { useState } from "react";
import BASE_API_URL from "../BASE_API_URL";

const Index = () => {
    const [ques, setQues] = useState(1);

    const submitForm = async () => {
        const body = {
            type: document.querySelector("input[name='type'][checked]").value,
            cocoa: document.querySelector("input[name='cocoa'][checked]").value,
            milk: document.querySelector("input[name='milk'][checked]").value,
            servings: document.querySelector("input[name='servings'][checked]")
                .value,
            flavour: document.querySelector("input[name='flavour'][checked]")
                .value,
        };

        const recommendData = await fetch(`${BASE_API_URL}/suggest-engine`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const recommend = recommendData.json();

        console.log(recommend);
    };

    function check(e) {
        const inp = e.target.parentElement.querySelector("input");

        if (inp.checked) {
            inp.removeAttribute("checked");
        } else {
            for (let i of e.target.parentElement.parentElement.querySelectorAll(
                "input"
            )) {
                i.removeAttribute("checked");
            }
            inp.setAttribute("checked", "checked");

            if (ques === 5) submitForm();
            else setQues(ques + 1);
        }
    }

    return (
        <>
            <h1 className="text-center text-5xl py-10 pt-20">
                What are you in the mood for today?
            </h1>
            <div className="units px-24 w-full flex flex-col items-center relative">
                <div
                    className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-lg mb-10"
                    id={ques === 1 ? "show-ques" : ""}
                >
                    <h2 className="question text-xl mb-6">
                        what are you in the mood for today?
                    </h2>
                    <div className="answers">
                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="type"
                                name="type"
                                value="chocolate"
                            />
                            <span className="checkmark"></span>
                            <label>Chocolates</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="type2"
                                name="type"
                                value="candy"
                            />
                            <span className="checkmark"></span>
                            <label>Candies</label>
                        </div>
                    </div>
                </div>

                <div
                    className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-lg mb-10"
                    id={ques === 2 ? "show-ques" : ""}
                >
                    <h2 className="question text-xl mb-6">
                        how much chocolate is too much chocolate for you?
                    </h2>
                    <div className="answers">
                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="cocoa"
                                name="cocoa"
                                value="1"
                            />
                            <span className="checkmark"></span>
                            <label>I don't wanna have Cocoa right now</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="cocoa"
                                name="cocoa"
                                value="2"
                            />
                            <span className="checkmark"></span>
                            <label>I would like some chocolaty treats</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="cocoa"
                                name="cocoa"
                                value="3"
                            />
                            <span className="checkmark"></span>
                            <label>I'm an Oompa Loompa!</label>
                        </div>
                    </div>
                </div>

                <div
                    className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-lg mb-10"
                    id={ques === 3 ? "show-ques" : ""}
                >
                    <h2 className="question text-xl mb-6">
                        Would you describe your appetite as Monstrous or
                        Wonkstrous?
                    </h2>
                    <div className="answers">
                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="servings"
                                name="servings"
                                value="1"
                            />
                            <span className="checkmark"></span>
                            <label>I'm looking for something light</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="servings"
                                name="servings"
                                value="2"
                            />
                            <span className="checkmark"></span>
                            <label>I am hungry</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="servings"
                                name="servings"
                                value="3"
                            />
                            <span className="checkmark"></span>
                            <label>Bring it on!</label>
                        </div>
                    </div>
                </div>

                <div
                    className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-lg mb-10"
                    id={ques === 4 ? "show-ques" : ""}
                >
                    <h2 className="question text-xl mb-6">
                        Would you like to visit the sugar mountains or the dark
                        cocoa forest?
                    </h2>
                    <div className="answers">
                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="flavour"
                                name="flavour"
                                value="normal"
                            />
                            <span className="checkmark"></span>
                            <label>Normal Chocolate is good for me</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="flavour"
                                name="flavour"
                                value="dark"
                            />
                            <span className="checkmark"></span>
                            <label>
                                I wanna go the dark side of chocolates
                            </label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="flavour"
                                name="flavour"
                                value="milk"
                            />
                            <span className="checkmark"></span>
                            <label>
                                Milk Chocolates are my kind of chocolates
                            </label>
                        </div>
                    </div>
                </div>

                <div
                    className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-lg mb-10"
                    id={ques === 5 ? "show-ques" : ""}
                >
                    <h2 className="question text-xl mb-6">
                        how about trying out the products from our new milk dam?
                    </h2>
                    <div className="answers">
                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="milk"
                                name="milk"
                                value="1"
                            />
                            <span className="checkmark"></span>
                            <label>I don't like Milk (0 boba sigma)</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="milk"
                                name="milk"
                                value="2"
                            />
                            <span className="checkmark"></span>
                            <label>Let's try this dam</label>
                        </div>

                        <div
                            className="answer bg-lightChocolate p-3 flex items-center rounded-xl"
                            onClick={(eve) => check(eve)}
                        >
                            <input
                                type="radio"
                                id="milk"
                                name="milk"
                                value="3"
                            />
                            <span className="checkmark"></span>
                            <label>Let's go swimming in the milky dam</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
