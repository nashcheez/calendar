[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nashcheez/calendar">
    <img src="images/calendar-icon.png" alt="calendar-logo" width="80" height="80" />
  </a>

  <h3 align="center">Calendar</h3>

  <p align="center">
    A calendar that displays events imported from a JSON file.
    <br />
    <br />
    <a href="https://nashcheez.github.io/calendar/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/nashcheez/calendar/issues">Report Bug</a>
    ·
    <a href="https://github.com/nashcheez/calendar/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Key Features](#key-features)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nashcheez.github.io/calendar/)

Calendar is an application that parses a json file and creates events based on it.

### Key Features

-   The application displays current events retrieved from the sample `JSON`, and does not have have the Edit/Delete/Cancel functionalities yet.

-   The app has an object oriented architecture implementing encapsulation and all the global variables & functions are attributed to a single `calendar` object.

-   The calendar timeline shows a normal day of 8AM - 6PM by default, unless there are events beyond the range. In case of events that do not lie in the range, the day is widened as required to show the extra events. In case of events all throughout the day, a full day calendar timeline is displayed (1AM - 12 AM).

### Built With

The application has been developed using HTML, CSS, JavaScript and jQuery.

For more information about jQuery, please visit the official docs.

-   [JQuery](https://jquery.com)

<!-- GETTING STARTED -->

## Getting Started

To run the application, just open `index.html` in your browser.

### Installation

1. Clone the repo

```sh
git clone https://github.com/nashcheez/calendar.git
```

2. Open `index.html`

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/nashcheez/calendar/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[@nashcheez](https://twitter.com/nashcheez) - nashcheez@gmail.com

Project Link: [https://github.com/nashcheez/calendar](https://github.com/nashcheez/calendar)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nashcheez/calendar.svg?style=flat-square
[contributors-url]: https://github.com/nashcheez/calendar/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nashcheez/calendar.svg?style=flat-square
[forks-url]: https://github.com/nashcheez/calendar/network/members
[stars-shield]: https://img.shields.io/github/stars/nashcheez/calendar.svg?style=flat-square
[stars-url]: https://github.com/nashcheez/calendar/stargazers
[issues-shield]: https://img.shields.io/github/issues/nashcheez/calendar.svg?style=flat-square
[issues-url]: https://github.com/nashcheez/calendar/issues
[license-shield]: https://img.shields.io/github/license/nashcheez/calendar.svg?style=flat-square
[license-url]: https://github.com/nashcheez/calendar/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=flat-square&logo=linkedin&colorB=0077b5
[linkedin-url]: https://linkedin.com/in/nashcheez
[product-screenshot]: https://user-images.githubusercontent.com/2913308/62429736-00b9ca80-b730-11e9-8e22-8fa3ce2b2e4c.png
