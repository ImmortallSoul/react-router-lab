import React from 'react';

// Тестове заповнення: масив об'єктів з даними контактів
const mockContacts = [
  { id: 1, name: "Олександр Петренко", role: "Головний розробник", email: "oleksandr@example.com", phone: "+380 50 123 4567" },
  { id: 2, name: "Марія Коваленко", role: "HR Менеджер", email: "maria@example.com", phone: "+380 67 987 6543" },
  { id: 3, name: "Іван Сидоренко", role: "Технічна підтримка", email: "ivan@example.com", phone: "+380 63 456 7890" }
];

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1>Контакти</h1>
      <p>Зв'яжіться з нашою командою за вказаними реквізитами:</p>
      
      {/* Рендеримо масив даних через метод .map() */}
      <div className="grid">
        {mockContacts.map((contact) => (
          <div key={contact.id} className="card">
            <h3>{contact.name}</h3>
            <p><strong>Посада:</strong> {contact.role}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Телефон:</strong> {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;