import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createMemoryHistory } from 'history';
import App from "../App";
import Chat from '../components/Chat';
import Menu from "../components/Menu";
import * as CONSTANTS from '../Constants';

describe("App test", () => {
    // beforeEach(() => {
    //     render(<App />);
    // });

    test('Menu buttons are correct', () => {
        const { container } = render(<App />);
        const submitButtons = container.querySelectorAll('input[type="submit"]');
      
        const submitValues = Array.from(submitButtons).map((button) => button.getAttribute('value'));

        expect(submitValues).toEqual(["Hiragana","Katakana","Words","Chat"]);
      });

    test('Logo Image appears', () => {
      const { getByAltText } = render(<App />);
      getByAltText('Logo');
    });


    test('navigation to location 1', () => {
      const { getByText, getByDisplayValue } = render(
        <BrowserRouter>
          <Routes>
          <Route index path="*" element={<Menu />} />
          <Route path={CONSTANTS.NAV_CHAT} element={<Chat/>}/>
          </Routes>
        </BrowserRouter>
        
      );
      const chatBtn = getByDisplayValue("Chat");
      fireEvent.click(chatBtn);

      getByText("JayBot");


    });
});