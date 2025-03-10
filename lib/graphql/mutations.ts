import { gql } from "@apollo/client"

export const INSERT_SONG = gql`
  mutation InsertSong($object: songs_insert_input!) {
    insert_songs_one(object: $object) {
      id
      title
      artist
      difficulty
      created_at
    }
  }
`

export const UPDATE_SONG = gql`
  mutation UpdateSong($id: uuid!, $object: songs_set_input!) {
    update_songs_by_pk(
      pk_columns: {id: $id}, 
      _set: $object
    ) {
      id
      title
      artist
      difficulty
      created_at
    }
  }
`

export const DELETE_SONG = gql`
  mutation DeleteSong($id: uuid!) {
    delete_songs_by_pk(id: $id) {
      id
    }
  }
`

export const INSERT_EXERCISE = gql`
  mutation InsertExercise($object: exercises_insert_input!) {
    insert_exercises_one(object: $object) {
      id
      name
      category
      difficulty
      created_at
    }
  }
`

export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise($id: uuid!, $object: exercises_set_input!) {
    update_exercises_by_pk(
      pk_columns: {id: $id}, 
      _set: $object
    ) {
      id
      name
      category
      difficulty
      created_at
    }
  }
`

export const DELETE_EXERCISE = gql`
  mutation DeleteExercise($id: uuid!) {
    delete_exercises_by_pk(id: $id) {
      id
    }
  }
`

export const START_PRACTICE_SESSION = gql`
  mutation StartPracticeSession($object: practice_sessions_insert_input!) {
    insert_practice_sessions_one(object: $object) {
      id
      start_time
      notes
    }
  }
`

export const END_PRACTICE_SESSION = gql`
  mutation EndPracticeSession($id: uuid!, $object: practice_sessions_set_input!) {
    update_practice_sessions_by_pk(
      pk_columns: {id: $id}, 
      _set: $object
    ) {
      id
      start_time
      end_time
      notes
    }
  }
`

export const ADD_PRACTICE_LOG = gql`
  mutation AddPracticeLog($object: practice_logs_insert_input!) {
    insert_practice_logs_one(object: $object) {
      id
      duration_minutes
    }
  }
`
