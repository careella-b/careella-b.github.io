import { useState } from 'react';
import { db } from '../Firebase';
import { doc, setDoc, addDoc, collection, Timestamp } from "firebase/firestore";

/**
 * Admin UI to create blog post and add to 'blogPosts' collection in db 
 * 
 */

/*const docData = {
        stringExample: "Hello world!",
        booleanExample: true,
        numberExample: 3.14159265,
        dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
        arrayExample: [5, true, "hello"],
        nullExample: null,
        objectExample: {
            a: 5,
            b: {
                nested: "foo"
            }
        }
    };
 */


/**
* A slider component for pages with no cover image on the slider
* 
*/

function CreateBlogPost(title,body) {

    const docPost = {
        postTitle: title,
        postBody: body,
        postImage: "link",
        author: "author",
        datePosted: Timestamp.fromDate(new Date()),
    };

    addDoc(collection(db, "blogPosts"), docPost, { merge: true });

}
export { CreateBlogPost };