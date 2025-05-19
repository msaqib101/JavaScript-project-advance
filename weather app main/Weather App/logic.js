



        function getWeather() {
            const city = document.getElementById('city_name').value.trim();
            const result = document.getElementById('weatherResult');

            if (!city) return;

            result.innerHTML = `<div class="loading">🔄 Fetching weather...</div>`;

            axios.get(`https://api.weatherapi.com/v1/forecast.json?key=3f8ae6e3b2274ac6a3865056250904&q=${city}&days=3&aqi=no&alerts=no`)
                .then(res => {
                    const { current, location, forecast } = res.data;
                    updateBackground(current.condition.text);

                    result.innerHTML = `
                        <div class="weather-card">
                            <div class="current-weather">
                                <h2 class="location">${location.name}, ${location.country}</h2>
                                <div class="weather-main">
                                    <div class="temp-section">
                                        <div class="temperature">${current.temp_c}°C</div>
                                        <div class="condition">${current.condition.text}</div>
                                    </div>
                                    <img src="https:${current.condition.icon}" class="weather-icon" />
                                </div>
                                
                                <div class="details-grid">
                                    <div class="detail-item">🌡️ Feels Like<br><strong>${current.feelslike_c}°C</strong></div>
                                    <div class="detail-item">💧 Humidity<br><strong>${current.humidity}%</strong></div>
                                    <div class="detail-item">🌬️ Wind<br><strong>${current.wind_kph} km/h</strong></div>
                                    <div class="detail-item">☀️ UV Index<br><strong>${current.uv}</strong></div>
                                </div>
                            </div>

                            <div class="forecast">
                                ${forecast.forecastday.map(day => `
                                    <div class="forecast-day">
                                        <span>${new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}</span>
                                        <img src="https:${day.day.condition.icon}" width="40" />
                                        <span>${day.day.avgtemp_c}°C</span>
                                        <span style="font-size:0.8rem">${day.day.condition.text}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                })
                .catch(err => {
                    result.innerHTML = `
                        <div class="error">
                            ❌ ${err.response?.data?.error?.message || 'City not found'}
                        </div>
                    `;
                });
        }

        function updateBackground(condition) {
            const body = document.body;
            const conditions = {
                'sunny': ['#ffd89b', '#19547b'],
                'rain': ['#005C97', '#363795'],
                'cloud': ['#536976', '#292E49'],
                'snow': ['#E0EAFC', '#CFDEF3'],
                'clear': ['#093637', '#44A08D']
            };

            const [bg1, bg2] = Object.entries(conditions).find(([key]) => 
                condition.toLowerCase().includes(key)
            )?.[1] || conditions.clear;

            body.style.background = `linear-gradient(45deg, ${bg1}, ${bg2})`;
        }
    