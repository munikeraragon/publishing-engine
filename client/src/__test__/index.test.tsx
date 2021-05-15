import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Home from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => { render(<Home />) });
});