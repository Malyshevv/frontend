import React from 'react';
import { createRoot } from 'react-dom/client';
import {AppComponent} from "../App";

const container = document.getElementById('App') as HTMLElement;
const root = createRoot(container);
root.render(<AppComponent />);
