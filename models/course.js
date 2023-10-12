/* Modello 'Course':
- Definisci un modello 'Course' con i seguenti attributi:
  - `courseId`: ID del corso (un identificativo unico).
  - `title`: Titolo del corso.
  - `description`: Descrizione breve del corso.
  - `startDate`: Data di inizio del corso.
  - `endDate`: Data di fine del corso.
  
Modello 'Instructor'**:
- Definisci un modello 'Instructor' con questi attributi:
  - `instructorId`: ID dell'istruttore (un identificativo unico).
  - `firstName`: Nome dell'istruttore.
  - `lastName`: Cognome dell'istruttore.
  - `email`: Email dell'istruttore (assicurati che sia unico).

Modello 'Student'**:
- Crea un modello 'Student' con questi attributi:
  - `studentId`: ID dello studente (un identificativo unico).
  - `firstName`: Nome dello studente.
  - `lastName`: Cognome dello studente.
  - `email`: Email dello studente.
  - `points`: Punti accumulati dallo studente per completare i corsi o altre attività.

Modello 'Enrollment'**:
- Questo modello rappresenta l'iscrizione degli studenti ai corsi. Deve avere:
  - `studentId`: ID dello studente.
  - `courseId`: ID del corso.
  - La combinazione di `studentId` e `courseId` dovrebbe formare una chiave primaria composta.
*/
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    courseId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })
}