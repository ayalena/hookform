import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const selectedDeliveryMoment = watch('deliveryFrequency');

    function onFormSubmit(data) {
        console.log(data);
    }

    // console.log('ERRORS', errors);
    return (
        <>
            <main>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-container">
                        <fieldset>
                            <legend>Gegevens</legend>

                            <div>
                                <label htmlFor="first-name"> Voornaam </label>
                                <input
                                    type="text"
                                    id="first-name"
                                    {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "Naam is verplicht",
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Naam moet minimaal drie karakters bevatten",
                                        },
                                    })}
                                />
                                {errors.firstName && <p>{errors.firstName.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="last-name"> Achternaam </label>
                                <input
                                    type="text"
                                    id="last-name"
                                    {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "Achternaam is verplicht"
                                        },
                                    })}
                                />
                                {errors.lastName && <p>{errors.lastName.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="age"> Leeftijd </label>
                                <input
                                    type="number"
                                    id="age"
                                    {...register("age", {
                                        required: {
                                            value: true,
                                            message: "Leeftijd is verplicht"
                                        },
                                        min: {
                                            value: 18,
                                            message: "Je moet minimaal 18 jaar zijn",
                                        },
                                    })}
                                />
                                {errors.age && <p>{errors.age.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="postal-code"> Postcode </label>
                                <input
                                    type="text"
                                    id="postal-code"
                                    {...register("postalCode", {
                                        required: {
                                            value: true,
                                            message: "Postcode is verplicht"
                                        },
                                        pattern: {
                                            value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                            message: "Geef een geldige postcode op",
                                        },
                                    })}
                                />
                                {errors.postalCode && <p>{errors.postalCode.message}</p>}
                            </div>

                            <div id="delivery">
                                <label htmlFor="delivery-frequency"> Bezorgfrequentie </label>
                                <select
                                    id="delivery-frequency"
                                    {...register("deliveryFrequency", {
                                        required: true,
                                    })}
                                >
                                    <option value="weekly"> Iedere week</option>
                                    <option value="two-weekly"> Om de week</option>
                                    <option value="monthly">Iedere maand</option>
                                    <option value="other"> Anders, namelijk ...</option>
                                </select>
                                {selectedDeliveryMoment === "other" &&
                                <input
                                    type="text"
                                    id="deliveryFrequencyOther"
                                    {...register("deliveryFrequencyOther")}
                                />
                                }
                            </div>

                            <div id="radio">
                                <input
                                    type="radio"
                                    id="daytime"
                                    {...register("daytimeDelivery")}
                                />
                                <label htmlFor="daytime"> Overdag </label>
                                <input
                                    type="radio"
                                    id="nighttime"
                                    {...register("nighttimeDelivery")}
                                />
                                <label htmlFor="nighttime"> 's Avonds </label>
                            </div>

                            <div>
                                <label htmlFor="message"> Opmerkingen </label>
                                <textarea
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    {...register(..."message")}
                                >

                                </textarea>
                            </div>

                            <div id="checkbox">
                                <input
                                    type="checkbox"
                                    id="terms-and-conditions"
                                    {...register("terms-and-conditions")}
                                />
                                Ik ga akkoord met de voorwaarden
                            </div>

                            <div>
                                <button
                                    type="submit"
                                >
                                    Verstuur
                                </button>
                            </div>

                        </fieldset>
                    </div>
                </form>
            </main>
        </>
    );
}

export default App;
