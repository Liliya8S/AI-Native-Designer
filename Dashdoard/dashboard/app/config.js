// Рабочий конфиг дашборда — сгенерирован директивой directive_dashboard.
// Руками не редактировать вручную без необходимости: при повторном запуске
// директивы (новые экраны/сценарии) файл перегенерируется.
window.DASHBOARD_CONFIG = {
  endpoint: "https://underwear-liable-mulberry.ngrok-free.dev",
  prototypeUrl: "https://ai-native-designer-ochre.vercel.app/screens/home-extended",
  screens: {
    "/screens/home-extended": "Главная",
    "/screens/camera-consent": "Запуск камеры · согласие",
    "/screens/ar-recognition": "AR-распознавание",
    "/screens/recognition-result-text-first": "Результат распознавания",
    "/screens/test-question": "Вопрос теста",
    "/screens/test-question-audio": "Вопрос теста · озвучка",
    "/screens/instructor-booking": "Запись к инструктору",
    "/screens/my-lessons": "Мои занятия",
    "/screens/profile": "Профиль"
  },
  flows: [
    {
      id: "scan-sign",
      name: "Сканирование знака",
      funnel: [
        "/screens/home-extended",
        "/screens/camera-consent",
        "/screens/ar-recognition",
        "/screens/recognition-result-text-first"
      ],
      goal: "/screens/recognition-result-text-first",
      firstClick: { screen: "/screens/home-extended", target: "button: Сканировать знак" }
    },
    {
      id: "pdd-test",
      name: "Тест ПДД",
      funnel: [
        "/screens/home-extended",
        "/screens/test-question",
        "/screens/test-question-audio",
        "/screens/recognition-result-text-first"
      ],
      goal: "/screens/recognition-result-text-first",
      firstClick: { screen: "/screens/home-extended", target: "button: Билеты ПДД" }
    },
    {
      id: "instructor-booking",
      name: "Запись к инструктору",
      funnel: [
        "/screens/home-extended",
        "/screens/instructor-booking",
        "/screens/my-lessons"
      ],
      goal: "/screens/my-lessons",
      firstClick: { screen: "/screens/home-extended", target: "button: Запись к инструктору" }
    }
  ],
  key: ""
};
