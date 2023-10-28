# Problems
- What if user doesn't send model no? it'll still allow the creation in DB
- why having an error class is important? Error Response should be consistent

# Some points
- Every validation check should be on frontend as well as backend (your backend can interact with multiple frontends)

- Good practice:
  Keeping raw string separate (As there could be translation service for website)
- Maintains more consistency

- Flight booking mechanism (More read heavy thing) why Monolith ❌  - flight booking + searching logic Both will be scaled

- `Design Doc` - Give presentation to another teams, before developement so the dev shouldn't break their stuff.
