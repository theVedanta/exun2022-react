const Index = () => {
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
        }
    }
    return (
        <>
            <h1 className="text-center text-5xl py-10 pt-20">
                What are you in the mood for today?
            </h1>
            <div className="units px-24 w-full flex flex-col items-center">
                <div className="unit w-2/3 bg-darkChocolate rounded-xl p-10 px-12 shadow-xl">
                    <h2 className="question text-xl mb-6">
                        How much of Wonka's goodness do you wanna have?
                    </h2>
                    <div className="answers">
                        <div className="answer" onClick={(eve) => check(eve)}>
                            <input type="radio" id="quantity" name="quantity" />
                            <span className="checkmark"></span>
                            <label>I wanna keep it light</label>
                        </div>

                        <div className="answer" onClick={(eve) => check(eve)}>
                            <input type="radio" id="quantity" name="quantity" />
                            <span className="checkmark"></span>
                            <label>I wanna keep it light</label>
                        </div>

                        <div className="answer" onClick={(eve) => check(eve)}>
                            <input type="radio" id="quantity" name="quantity" />
                            <span className="checkmark"></span>
                            <label>I wanna keep it light</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
