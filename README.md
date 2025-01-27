# React useEffect Hook in Conditional Statement

This repository demonstrates a common issue encountered when using the `useEffect` hook in React within a conditional statement.  In strict mode, this practice can lead to unexpected behavior and warnings.

## Problem

The `useEffect` hook is typically used for side effects (like data fetching or DOM manipulations). When placed inside a conditional statement, it might trigger multiple times, especially during Strict Mode checks. This can cause warnings (such as infinite loops) or unexpected behavior.  React's Strict Mode adds additional checks, making this issue more prominent.

## Solution

The best practice is to conditionally execute the effect's logic *inside* the `useEffect` itself, rather than conditionally rendering the `useEffect` hook. This ensures the effect is called only when necessary while still benefiting from React's lifecycle management.