## Inspiration
School Admin Package addresses a very important area–integrating technology into education. But unlike most ''tech in edu" project, which focus on improving the student's role, we thought about how tech could be used to help schools' administrations. Existing school IT solutions are often inefficient, expensive, and insecure; SAP aims to act as a central core, providing a database to pull together a variety of technologies as well as as replace older, incompatible aging IT software. This would lower IT costs dramatically because not only is SAP free, but school districts would no longer have to hire IT people to manage these many technologies (because there would simply be no need!). This would give funds to more important areas, such as increasing coding awareness.

## What it does
SAP is essentially a core for a modular stack. SAP provides the database and essential features critical to any school–user information, grades, assignments, etc., along with a mobile app and website for accessing these tools. SAP also has support for packages, such as Google Classroom, Moodle, and Quizlet, which would be able to communicate with the entire stack. By integrating with tools such as Google classroom, we make the transition to SAP much simpler for the schools that already rely on this type of solution.

## How we built it
We built SAP with React on the frontend and Flask/Postgres on the backend! We <3 React

## Challenges we ran into
Throughout MHacks we had trouble with a general lack of familiarity of the team with React. Additionally, we spent the first 4 or 5 hours of work modelling our project off of GraphQL. Unfortunately, it turns out that Python has terrible support for it, and since our backend engineer was very insistence on using SQLAlchemy we had to abandon it in favor of traditional REST.

## Accomplishments that we're proud of
Over the course of the hackathon we developed a functional React app that interacts with a clear, well-defined backend API. We also engineered a genetic algorithm to determine schedules for an entire school of students.

## What we learned
We got a lot of practice with new technologies, such as getting our toes wet with GraphQL.

## What's next for School Admin Package
School Admin Package will continue as an free, open-source project hosted on GitHub. As the project reaches maturity and stability we hope to see it used in school districts nationwide.
