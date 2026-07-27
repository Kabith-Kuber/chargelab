# ChargeLab

ChargeLab is a browser-based EV charging and battery-reliability simulator. It is a portfolio learning project for systems thinking, energy software, telemetry, and test engineering.

## Run

Open `index.html` in a browser. No installation, API key, vehicle connection, or real telemetry is used.

Run the simulation checks with `node test.js`.

## Safety and scope

- All telemetry and outcomes are synthetic.
- This is not vehicle-control software, a battery-management system, or charging advice.
- The model uses transparent, deliberately simplified assumptions for visual learning.

## Next build steps

- [ ] Add a TypeScript simulation core with unit tests.
- [ ] Add CSV import for synthetic test traces.
- [ ] Add scenario regression tests and a reliability report export.
- [ ] Build an optional API that stores only generated sessions.
