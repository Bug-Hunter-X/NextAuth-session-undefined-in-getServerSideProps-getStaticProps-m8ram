# NextAuth Session Undefined in getServerSideProps/getStaticProps

This repository demonstrates a common issue when using NextAuth.js with `getServerSideProps` or `getStaticProps` where the session object remains undefined despite the user being logged in.  The problem arises from incorrect implementation and order of operations.

## Problem

The `unstable_getServerSession` function requires the `context` object, often accessed incorrectly within these functions.  Attempting to access the session directly within `getServerSideProps` or `getStaticProps` without proper context handling leads to the session being undefined.

## Solution

The solution provided utilizes the correct context and import of the necessary functions. 
This ensures the session is correctly retrieved and made available to the component.  This approach handles the asynchronous nature of the session retrieval accurately.