/* eslint-disable @typescript-eslint/no-unused-vars */
window.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector(".body-2");
  body
    ? console.log("body-2 was found!")
    : console.log("body-2 was not found!");
    
  if (body) {
    body.innerHTML = `
<script src="https://cdn.tailwindcss.com"></script>
<div class="wrapper-3">
      <!-- gys -->
      <div id="dash-preview" class="p-[6.9375rem_1rem_2rem]">
        <div
          class="py-5 px-2 lg:px-5 max-w-[1126px] mx-auto font-MontserratRegular"
        >
          <div
            class="rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden"
          >
            <div id="header" class="bg-black text-[#F2F4F7] py-[15px]">
              <div
                id="gys"
                class="w-full max-w-[160px] md:max-w-[265px] px-[12px] md:px-[32px] flex items-center gap-3"
              >
                <img
                  src="https://app.propulse.me/logo.png"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 265px"
                  srcset="https://app.propulse.me/logo.png 1500w"
                  alt="Sprouty Social Logo, ball with rocket in S"
                  class="hidden md:block"
                />
                <img
                  src="https://app.propulse.me/logo.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 150px, 100vw"
                  srcset="https://app.propulse.me/logo.png 1500w"
                  alt="rocket with S in a ball"
                  class="md:hidden w-12 h-auto"
                />
                <b class="text-[32px]">Propulse</b>
              </div>
            </div>

            <div class="px-4 md:px-0 bg-[#0D0E10] text-white">
              <div
                class="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-center md:justify-between items-center px-4 md:px-10 py-5 mb-10 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.02)]"
              >
                <div
                  class="font-[600] text-base lg:text-2xl text-center md:text-start"
                >
                  Précision de croissance pour
                  <span
                    class="font-normal bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] text-transparent bg-clip-text"
                    id="username1"
                  >
                    <!-- @${user.username} -->
                  </span>
                </div>

                <div
                  class="relative bg-black text-[[#F9F9FB]] text-white rounded-md p-[13px] text-lg font-bold"
                >
                  <div
                    class="flex items-center justify-center cursor-pointer text-[600]"
                    onclick="chartRangetoggleDropdown()"
                  >
                    <span
                      class="p-0 flex items-center bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] text-transparent bg-clip-text"
                      id="selectedRange"
                      >Voir mensuellement</span
                    >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      class="w-[16px] h-auto"
                      height="14px"
                      width="16px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      ></path>
                    </svg>
                  </div>

                  <!-- modal -->
                  <div
                    class="chartRangeDropdown absolute w-full min-w-[250px] top-full -left-16 rounded-[10px] z-[2] text-white bg-black opacity-0 pointer-events-none"
                    style="
                      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px;
                      transition: opacity 0.15s ease-in 0s;
                    "
                  >
                    <div
                      class="py-4 px-[30px] hover:bg-[#f8f8f8] bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] hover:text-transparent bg-clip-text cursor-pointer whitespace-nowrap"
                      onclick="toggleChartRangeDropdown('Monthly')"
                      id="Monthly"
                    >
                    Voir mensuellement
                    </div>
                    <div
                      class="py-4 px-[30px] hover:bg-[#f8f8f8] bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] hover:text-transparent bg-clip-text cursor-pointer whitespace-nowrap"
                      onclick="toggleChartRangeDropdown('Weekly')"
                      id="Weekly"
                    >
                    Voir hebdomadaire
                    </div>
                    <div
                      class="py-4 px-[30px] hover:bg-[#f8f8f8] bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] hover:text-transparent bg-clip-text cursor-pointer whitespace-nowrap"
                      onclick="toggleChartRangeDropdown('Daily')"
                      id="Daily"
                    >
                    Voir quotidiennement
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex flex-col lg:flex-row items-center justify-between gap-[25px] md:px-10 mt-[35px]"
              >
                <!-- user -->
                <div
                  class="flex flex-col md:flex-row justify-center md:justify-start items-center rounded-xl bg-black text-[#F9F9FB] md:h-[124px] px-5 md:pl-5 md:pr-16 py-[13px] w-full md:w-fit"
                >
                  <!-- image -->
                  <div class="relative mr-[12px] lg:mr-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="98"
                      viewBox="0 0 98 98"
                      fill="none"
                      class="w-[70px] md:w-[98px] h-[70px] md:h-[98px]"
                    >
                      <circle
                        cx="49"
                        cy="49"
                        r="48.0257"
                        stroke="url(#paint0_linear_114_1660)"
                        stroke-width="1.94861"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_114_1660"
                          x1="108.316"
                          y1="10.3158"
                          x2="2.76691e-06"
                          y2="76.079"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#C913B9" />
                          <stop offset="0.500947" stop-color="#F9373F" />
                          <stop offset="1" stop-color="#FECD00" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <img
                      class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
                      src=""
                      id="profile_pic_url"
                      alt="user-dp"
                    />
                  </div>

                  <!-- details -->
                  <div
                    class="flex flex-col text-center md:text-start mt-5 md:mt-0"
                  >
                    <div
                      class="flex justify-center md:justify-start items-center gap-1 text-base lg:text-[20px] font-[500]"
                    >
                      <span id="full_name"><!-- ${user.full_name} --></span>
                      <img
                        alt=""
                        class="lg:hidden platform-logo"
                        src="https://app.SproutySocial.com/instagram.svg"
                        width="16px"
                        height="16px"
                      />
                    </div>
                    <div
                      class="mt-[6px] mb-3 text-[14px] leading-[16.8px] font-semibold text-[#5A6387]"
                      id="username"
                    >
                      <!-- @${user.username} -->
                    </div>
                    <div class="flex items-center">
                      <div
                        class="text-[14px] leading-[15.6px] tracking-[0.52px] flex whitespace-nowrap font-bold bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] text-transparent bg-clip-text uppercase"
                      >
                      Avec Propulse
                      </div>
                    </div>
                  </div>
                </div>

                <!-- stats -->
                <div
                  class="flex flex-row items-center justify-center gap-[15px] w-full"
                >
                  <div
                    class="flex-1 py-3 md:py-0 md:min-w-[150px] max-w-[190px] bg-black text-white md:h-[124px] rounded-xl overflow-hidden flex flex-col justify-center items-center"
                  >
                    <div
                      class="text-[12px] md:text-[14px] lg:text-[16px] leading-[11px] font-[600] false text-center"
                    >
                      Followers
                    </div>
                    <div
                      class="flex flex-col justify-between items-center text-center relative"
                    >
                      <div
                        class="text-[24px] lg:text-4xl lg:leading-[38.4px] font-bold mt-2 md:mt-[14px]"
                        id="follower_count"
                      >
                        <!-- 543 -->
                        <!-- ${numFormatter(user.follower_count)} -->
                      </div>
                      <div
                        class="absolute lg:static top-[calc(100%-10px)] left-[50%] translate-x-[-50%] py-1 px-2 rounded-[7px] bg-[#c8f7e1] text-[#23df85] mt-1 hidden d-flex items-center gap-1 text-[10px] lg:text-[12px] font-bold font-MontserratBold lg:mr-[-32px] xl:mr-0"
                      >
                        123
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 320 512"
                          color="#F5793A"
                          height="12"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                          style="color: rgb(27, 137, 255)"
                        >
                          <path
                            d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    class="flex-1 py-3 md:py-0 md:min-w-[150px] max-w-[190px] bg-[linear-gradient(90deg,_#b16cea_20%,_#ff5e69_60%,_#ff8a56_80%,_#ffa84b)] text-white md:h-[124px] rounded-xl overflow-hidden flex flex-col justify-center items-center"
                  >
                    <div
                      class="text-[12px] md:text-[14px] lg:text-[16px] leading-[11px] font-[600] text-center"
                    >
                      Avec Nous
                    </div>
                    <div
                      class="text-[24px] lg:text-4xl lg:leading-[38.4px] font-bold mt-2 md:mt-[14px]"
                      id="with_sproutyVal"
                    >
                      <!-- 543 -->
                      <!-- ${numFormatter(withSprouty)}${
      withSprouty >= 1000000 ? "+" : ""
    } -->
                    </div>
                  </div>

                  <div
                    class="flex-1 py-3 md:py-0 md:min-w-[150px] max-w-[190px] bg-black text-white md:h-[124px] rounded-xl overflow-hidden flex flex-col justify-center items-center"
                  >
                    <div
                      class="text-[12px] md:text-[14px] lg:text-[16px] leading-[11px] font-[600] text-[#333] text-center"
                    >
                      Sans Nous
                    </div>
                    <div
                      class="text-[24px] lg:text-4xl lg:leading-[38.4px] font-bold mt-2 md:mt-[14px]"
                      id="without_sprouty"
                    >
                      <!-- 543 -->
                      <!-- ${numFormatter(withoutSprouty)} -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="py-5 lg:px-10 bg-[#0D0E10] _text-white">
              <div class="">
                <div id="chart1"></div>
                <div id="chart2"></div>
                <div id="dailyChartEl"></div>
              </div>
            </section>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts@latest"></script>
        <!-- <script src="script.js"></script> -->
      </div>
    </div>
    `;
  }
});

var chartRange = "Monthly";
var usercurrentFollowersCount = 0;
var withGYS = 0;
var withoutGYS = 0;
var username = "";
var [resultArray1, resultArray2] = [0, 0];
var [weeklyR1, weeklyR2] = [0, 0];
var [dailyR1, dailyR2] = [0, 0];

const chartRangetoggleDropdown = () => {
  const chartRangeDropdownEl = document.querySelectorAll(".chartRangeDropdown");
  chartRangeDropdownEl.forEach((chartRangeDropdown) => {
    if (chartRangeDropdown.classList.contains("opacity-0")) {
      chartRangeDropdown.classList.remove("opacity-0", "pointer-events-none");
      chartRangeDropdown.classList.add("opacity-100", "pointer-events-all");
    } else {
      chartRangeDropdown.classList.remove("opacity-100", "pointer-events-all");
      chartRangeDropdown.classList.add("opacity-0", "pointer-events-none");
    }
  });
};

const toggleChartRangeDropdown = (range) => {
  chartRange = range.toString();
  const selectedRange = document.querySelector("#selectedRange");
  selectedRange.textContent = range.toString();

  chartRangetoggleDropdown();

  if (chartRange === "Monthly") {
    const options = renderMonthlyChart();
    document.querySelector("#chart2").classList.add("hidden");
    document.querySelector("#dailyChartEl").classList.add("hidden");
    document.querySelector("#chart1").classList.remove("hidden");
    document.querySelector("#chart1").classList.add("block");
    const el = document.querySelector("#chart1");
    if (el) {
      var chart = new ApexCharts(el, options);
      chart.render();
    }
  } else if (chartRange === "Weekly") {
    const options = renderWeeklyChart();
    document.querySelector("#chart1").classList.add("hidden");
    document.querySelector("#dailyChartEl").classList.add("hidden");
    document.querySelector("#chart2").classList.remove("hidden");
    document.querySelector("#chart2").classList.add("block");
    const el = document.querySelector("#chart2");
    if (el) {
      var chart = new ApexCharts(el, options);
      chart.render();
    }
  } else {
    document.querySelector("#chart1").classList.add("hidden");
    document.querySelector("#chart2").classList.add("hidden");
    document.querySelector("#dailyChartEl").classList.remove("hidden");
    document.querySelector("#dailyChartEl").classList.add("block");

    const options = renderDailyChart();
    const dailyChartEl = document.querySelector("#dailyChartEl");
    if (dailyChartEl) {
      var chart = new ApexCharts(dailyChartEl, options);
      chart.render();
    }
  }
};

function generateDates(range) {
  var dateList = [];
  var currentDate = new Date();

  // Generate dates for the next 11 days
  for (var i = 0; i < range; i++) {
    var date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
    var formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
    dateList.push(formattedDate);
  }
  return dateList;
}

function generateMonthlyDates(months) {
  const currentDate = new Date();
  const dates = [];

  // for (let i = 0; i < months; i++) {
  //     currentDate.setMonth(currentDate.getMonth() + 1);
  //     const month = currentDate.getMonth() + 1;
  //     const year = currentDate.getFullYear() % 100; // Get the last two digits of the year
  //     const formattedDate = `${month}/${year}`;
  //     dates.push(formattedDate);
  // }

  // return dates;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < months; i++) {
    currentDate.setMonth(currentDate.getMonth() + 1);
    const monthIndex = currentDate.getMonth();
    const monthName = monthNames[monthIndex];
    const year = currentDate.getFullYear() % 100; // Get the last two digits of the year
    const formattedDate = `${monthName}/${year}`;
    dates.push(formattedDate);
  }

  return dates;
}

function generateWeeklyDateRanges(range) {
  var dateRangeList = [];
  var currentDate = new Date();

  // Get the current day of the week (00, 6, where 0 represents Sunday)
  var currentDayOfWeek = currentDate.getDay();

  // Calculate the first day of the current week
  var firstDayOfWeek = new Date(
    currentDate.getTime() - currentDayOfWeek * 24 * 60 * 60 * 1000
  );

  // Generate date ranges for the next 'range' weeks
  for (var i = 0; i < range; i++) {
    var startDate = new Date(
      firstDayOfWeek.getTime() + i * 7 * 24 * 60 * 60 * 1000
    );
    var endDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);

    var formattedStartDate = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}`;
    var formattedEndDate = `${endDate.getMonth() + 1}/${endDate.getDate()}`;

    var dateRange = `${formattedStartDate} - ${formattedEndDate}`;
    dateRangeList.push(dateRange);
  }

  return dateRangeList;
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArrays(baseNumber, weekly) {
  if (!baseNumber) return [0, 0];
  // console.log(baseNumber);
  // console.log(weekly);
  // baseNumber = 899999
  var withGYSMin, withGYSMax, withoutGYSMin, withoutGYSMax;
  if (baseNumber >= 1 && baseNumber <= 999) {
    withoutGYSMin = 10;
    withoutGYSMax = 30;
    withGYSMin = 300;
    withGYSMax = 800;
  } else if (baseNumber >= 1000 && baseNumber <= 1999) {
    withoutGYSMin = 40;
    withoutGYSMax = 50;
    withGYSMin = 600;
    withGYSMax = 1600;
  } else if (baseNumber >= 2000 && baseNumber <= 4999) {
    withoutGYSMin = 70;
    withoutGYSMax = 80;
    withGYSMin = 900;
    withGYSMax = 2000;
  } else if (baseNumber >= 5000 && baseNumber <= 9999) {
    withoutGYSMin = 100;
    withoutGYSMax = 150;
    withGYSMin = 1000;
    withGYSMax = 2000;
  } else if (baseNumber >= 10000 && baseNumber <= 19999) {
    withoutGYSMin = 150;
    withoutGYSMax = 200;
    withGYSMin = 1000;
    withGYSMax = 2000;
  } else if (baseNumber >= 20000 && baseNumber <= 49999) {
    withoutGYSMin = 350;
    withoutGYSMax = 500;
    withGYSMin = 1500;
    withGYSMax = 3500;
  } else if (baseNumber >= 50000) {
    withoutGYSMin = 750;
    withoutGYSMax = 1500;
    withGYSMin = 1500;
    withGYSMax = 3500;
  }

  var m1Min = weekly ? withGYSMin / weekly : withGYSMin;
  var m1Max = weekly ? withGYSMax / weekly : withGYSMax;
  var m2Min = weekly ? withoutGYSMin / weekly : withoutGYSMin;
  var m2Max = weekly ? withoutGYSMax / weekly : withoutGYSMax;
  const array1 = [baseNumber + getRandomNumberInRange(m1Min, m1Max)];
  const array2 = [baseNumber + getRandomNumberInRange(m2Min, m2Max)];

  for (let i = 1; i < 12; i++) {
    const prev1 = array1[i - 1];
    const prev2 = array2[i - 1];

    const next1 = prev1 + getRandomNumberInRange(m1Min, m1Max);
    const next2 = prev2 + getRandomNumberInRange(m2Min, m2Max);

    array1.push(next1);
    array2.push(next2);
  }

  return [array1, array2];
}

const renderMonthlyChart = () => {
  var number_of_bars = 7;
  var options = {
    colors: ["#F5793A", "#EDEFF1"],
    // backgroundBarColors: ["#f00"],
    legend: {
      show: false,
    },
    series: [
      {
        name: "Propulse",
        // data: resultArray1?.slice(),
        data: resultArray1?.slice(-number_of_bars),
      },
      {
        name: "Others",
        data: resultArray2?.slice(-number_of_bars),
      },
    ],
    chart: {
      height: 450,
      type: "line",
      toolbar: {
        show: false,
      },
      id: "areachart",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // curve: 'straight',
      // width: [2, 1],
      width: 3,
    },
    plotOptions: {
      bar: {
        borderRadius: 14,
        borderRadiusApplication: "end",
      },
    },
    grid: {
      show: true,
      borderColor: "#CDDBEB", // Color of grid lines
      strokeDashArray: 4,
      padding: {
        left: 8,
        right: 8,
      },
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      categories: generateMonthlyDates(number_of_bars),
      labels: {
        offsetX: 3,
        // formatter: function (value, timestamp, opts) {
        //     const date = new Date(timestamp);
        //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
        //     const day = date.getDate().toString().padStart(2, '0');
        //     return month + '/' + day;
        // }
      },
    },
    yaxis: {
      show: true,
    },
  };

  return options;
};

function divideNumber(number) {
  const numbers = [];
  let remaining = number;

  for (let i = 0; i < 4 - 1; i++) {
    const min = Math.floor((remaining / (4 - i)) * 0.8); // Adjust the factor (0.8) as needed
    const max = Math.ceil((remaining / (4 - i)) * 1.2); // Adjust the factor (1.2) as needed
    const currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.push(currentNumber);
    remaining -= currentNumber;
  }

  numbers.push(remaining);
  return numbers;
}

function generateDailyData(array) {
  const result = [];

  array.forEach((item) => {
    const p = divideNumber(item - usercurrentFollowersCount);
    p.forEach((i) => {
      result.push(i);
    });
  });

  // console.log(array);
  // console.log(result);
  return result;
}

function distributeAndSortArray(array) {
  // Sort the array in ascending order
  const sortedArray = array.sort((a, b) => a - b);

  const result = [];
  const length = sortedArray.length;

  // Calculate the increment based on the maximum value and array length
  const increment = Math.ceil(sortedArray[length - 1] / length);

  // Distribute the values with a minimum difference of increment
  for (let i = 0; i < length; i++) {
    const distributedValue = sortedArray[0] + i * increment;
    result.push(distributedValue);
  }

  return result;
}

function divideAndSortNumber(number) {
  const parts = [];
  let remainder = number;

  // Divide the number into four parts
  for (let i = 0; i < 3; i++) {
    const part = Math.floor(remainder / (4 - i));
    parts.push(part);
    remainder -= part;
  }
  parts.push(remainder + 1); // Add 1 to the last part for a larger difference

  // Sort the parts in ascending order
  parts.sort((a, b) => a - b);

  // Return the result
  return parts;
}

function generateWeeklyData(array) {
  const newArray = [];

  // Loop through the given array
  for (let i = 0; i < array.length; i++) {
    const divided = distributeAndSortArray(divideAndSortNumber(array[i]));
    newArray.push(...divided);
  }

  // Remove the first 4 values
  // const trimmedArray = newArray.slice(16);
  const trimmedArray = newArray;
  return trimmedArray.slice(0, 8);
}

const renderWeeklyChart = () => {
  var number_of_bars = 7;
  if (!weeklyR1 || weeklyR1?.length === 0) {
    const [r1, r2] = generateArrays(usercurrentFollowersCount, 4);
    weeklyR1 = r1;
    weeklyR2 = r2;
  }
  var options = {
    colors: ["#F5793A", "#EDEFF1"],
    legend: {
      show: false,
    },
    series: [
      {
        name: "Propulse",
        // data: resultArray1?.slice(0, 8),
        // data: generateWeeklyData(resultArray1),
        data: weeklyR1?.slice(0, number_of_bars),
      },
      {
        name: "Others",
        // data: resultArray2?.slice(0, number_of_bars),
        // data: generateWeeklyData(resultArray2),
        data: weeklyR2?.slice(0, number_of_bars),
      },
    ],
    chart: {
      height: 450,
      type: "bar",
      toolbar: {
        show: false,
      },
      id: "areachart",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // curve: 'straight',
      // width: [2, 1],
      width: 3,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end",
      },
    },
    grid: {
      show: true,
      borderColor: "#CDDBEB", // Color of grid lines
      strokeDashArray: 4,
      padding: {
        left: 8,
        right: 8,
      },
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      categories: generateWeeklyDateRanges(number_of_bars),
      labels: {
        offsetX: 3,
      },
    },
    yaxis: {
      show: true,
    },
  };

  return options;
};

const renderDailyChart = () => {
  var number_of_bars = 7;
  // if (!dailyR1 || dailyR1?.length === 0) {
  //     const [r1, r2] = generateArrays(usercurrentFollowersCount, 4);
  //     dailyR1 = r1;
  //     dailyR2 = r2
  // }
  if (!weeklyR1 || weeklyR1?.length === 0) {
    const [r1, r2] = generateArrays(usercurrentFollowersCount, 4);
    weeklyR1 = r1;
    weeklyR2 = r2;
  }

  // console.log(weeklyR1[0]);

  var options = {
    colors: ["#F5793A", "#c1c1c1"],
    legend: {
      show: false,
    },
    series: [
      {
        name: "Others",
        // data: resultArray2?.slice(0, number_of_bars),
        // data: generateWeeklyData(resultArray2),
        data: weeklyR2?.slice(0, number_of_bars),
      },
      {
        name: "Propulse",
        data: generateDailyData(weeklyR1).slice(0, number_of_bars),
        // data: dailyR1?.slice(0, 7),
      },
    ],
    chart: {
      height: 450,
      type: "bar",
      toolbar: {
        show: false,
      },
      id: "areachart",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // curve: 'straight',
      // width: [2, 1],
      width: 3,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: "end",
      },
    },
    grid: {
      show: true,
      borderColor: "#CDDBEB", // Color of grid lines
      strokeDashArray: 4,
      padding: {
        left: 8,
        right: 8,
      },
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      categories: generateDates(number_of_bars),
      labels: {
        offsetX: 3,
        // formatter: function (value, timestamp, opts) {
        //     const date = new Date(timestamp);
        //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
        //     const day = date.getDate().toString().padStart(2, '0');
        //     return month + '/' + day;
        // }
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM yyyy",
          week: "MMM dd",
          day: "MMM dd",
        },
      },
    },
    yaxis: {
      show: true,
    },
  };

  return options;
};

function getUsernameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("username");
}

async function getUserData() {
  const username = getUsernameFromURL();
  if (!username) return { message: "no username" };

  const url =
    "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile";
  const params = { ig: username, response_type: "short", corsEnabled: "true" };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "33407c8d8amsh1a7420e970e1dd6p16b479jsn8b3d18767a41",
      "X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
    },
  };

  const r = await fetch(`${url}?${new URLSearchParams(params)}`, options)
    .then((response) => response.json())
    .then((data) => {
      var res = { message: "success", data: data?.[0] };
      return res;
    })
    .catch((error) => {
      // Handle errors
      console.log(error);
      return { message: error?.message };
    });
  return r;
}

const numFormatter = (num = 0) => {
  if (num > 999 && num <= 999949) {
    return `${(num / 1000).toFixed(1)}k`;
  }

  if (num > 999949) {
    return `${(num / 1000000).toFixed(1)}m`;
  }

  if (num === 0) return 0;

  if (num) {
    return num;
  }
};

const getLastItem = (array) => array[array.length - 1];

function calculatePercentageDifference(num1, num2) {
  // Calculate the absolute difference between the numbers
  const difference = Math.abs(num1 - num2);

  // Calculate the percentage difference
  const percentageDifference = (difference / ((num1 + num2) / 2)) * 100;

  return percentageDifference;
}

window.addEventListener("DOMContentLoaded", async () => {
  // return;
  document.getElementById("dash-preview").classList.add("hidden");
  const res = await getUserData();
  if (res?.message === "success") {
    document.getElementById("dash-preview").classList.remove("hidden");
    // console.log(res.data);
    const user = res.data;
    if (user) {
      const buttons = document.querySelectorAll(".custom-button-content");
      buttons.forEach((button) => {
        button.textContent = `Start Free Trial @${user.username}`;
      });
      usercurrentFollowersCount = user.follower_count;
      var [r1, r2] = generateArrays(usercurrentFollowersCount);
      // console.log(r1, r2);
      resultArray1 = r1;
      resultArray2 = r2;
      withGYS = getLastItem(r1);
      withoutGYS = getLastItem(r2);
      // console.log(calculatePercentageDifference(50, 70));
      // console.log(calculatePercentageDifference(withGYS, withoutGYS));

      var profile_pic_url = user.profile_pic_url;
      var full_name = user.full_name;
      var username = user.username;
      var follower_count = user.follower_count;
      var without_GYS = numFormatter(withoutGYS);
      var with_GYSVal = `${numFormatter(withGYS)}${
        withGYS >= 1000000 ? "+" : ""
      }`;

      document.getElementById("profile_pic_url").src = profile_pic_url;
      document.getElementById("full_name").textContent = full_name;
      document.getElementById("username").textContent = `@${username}`;
      document.getElementById("username1").textContent = `@${username}`;
      document.getElementById("follower_count").textContent = follower_count;
      document.getElementById("without_sprouty").textContent = without_GYS;
      document.getElementById("with_sproutyVal").textContent = with_GYSVal;

      const options = renderMonthlyChart();
      document.querySelector("#chart2").classList.add("hidden");
      document.querySelector("#chart1").classList.remove("hidden");
      document.querySelector("#chart1").classList.add("block");
      const el = document.querySelector("#chart1");
      if (el) {
        var chart = new ApexCharts(el, {
          ...options,
          grid: {
            show: true,
          },
        });
        chart.render();
      }
    }
  }
});
