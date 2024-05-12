import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import {App} from "./App";

describe("App A", () => {
  test("renders", () => {
    render(<App/>);
    expect(screen.getByText("Vite + React")).toBeTruthy();
  });
});