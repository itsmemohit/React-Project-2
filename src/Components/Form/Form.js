import React, { useState } from 'react';
import { db } from '../../firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

export default function Example() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [address, setaddress] = useState("");


    const handleSubmit = (e) => {
        console.log("First Name:" + firstName);
        e.preventDefault();
        console.log("All: " + secondName, email, company, address);

        const docRef = addDoc(collection(db, "profile-info"), {
            firstName: firstName,
            secondName: secondName,
            email: email,
            company: company,
            address: address,
            timestamp: serverTimestamp()
        }).then(() => {
            alert('Message has been Submitted ');

        }).catch((error) => {
            alert(error.message);
        });
        console.log("Document written with ID: ", docRef.id);

        // const q = query(collection(db, "profile-info"));
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });

        // db.collection('profile-info')
        //     .add({
        //         firstName: firstName,
        //         secondName: secondName,
        //         email: email,
        //         company: company,
        //         address: address
        //     })
        //     .then(() => {
        //         alert('Message has been Submitted ');

        //     }).catch((error) => {
        //         alert(error.message);
        //     });
        setFirstName("");
        setSecondName("");
        setEmail("");
        setCompany("");
        setaddress("");
    };

    // await db.collection('cities').doc('new-city-id').set(data);
    // // Add a new document with a generated id.
    // const res = await db.collection('profile-info').add({
    //     firstName: firstName,
    //     secondName: secondName,
    //     email: email,
    //     company: company,
    //     address: address
    // });

    // console.log('Added document with ID: ', res.id); index.js

    return (
        <>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-600" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit} >
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={secondName}
                                                onChange={(e) => setSecondName(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="company"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={address}
                                                onChange={(e) => setaddress(e.target.value)}
                                            />
                                        </div>






                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input type="text" name="name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </label>
                            <input type="submit" value="Submit" />
                        </form> */}
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-400" />
                </div>
            </div>


        </>
    )
}
