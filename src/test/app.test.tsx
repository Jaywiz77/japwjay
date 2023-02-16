import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Menu from "../components/Menu";
describe("App test", () => {
    beforeEach(() => {
        render(<App />);
    });

    test('Menu buttons are correct', () => {
        const { container } = render(<App />);
        const submitButtons = container.querySelectorAll('input[type="submit"]');
      
        const submitValues = Array.from(submitButtons).map((button) => button.getAttribute('value'));

        expect(submitValues).toEqual(["Hiragana","Katakana","Words","Chat"]);
      });


      test('Menu buttons are correct 2', () => {
        const { container } = render(    <BrowserRouter>
            <Routes><Menu />    
      </Routes></BrowserRouter>);
        const submitButtons = container.querySelectorAll('input[type="submit"]');
      
        const submitValues = Array.from(submitButtons).map((button) => button.getAttribute('value'));

        expect(submitValues).toEqual(["Hiragana","Katakana","Words","Chat"]);
      });

});