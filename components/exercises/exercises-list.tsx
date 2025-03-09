"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useExercises } from "@/hooks/use-exercises"
import { Edit, ListMusic, Plus, Search, Trash } from "lucide-react"

export function ExercisesList() {
  const { exercises, isLoading, addExercise, editExercise, removeExercise } = useExercises()
  const { toast } = useToast()

  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedExercise, setSelectedExercise] = useState<any>(null)

  // Form state
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Scales")
  const [difficulty, setDifficulty] = useState(5)

  const resetForm = () => {
    setName("")
    setCategory("Scales")
    setDifficulty(5)
  }

  const handleAddExercise = () => {
    if (!name.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a name for the exercise",
        variant: "destructive",
      })
      return
    }

    addExercise(name, category, difficulty)
    resetForm()
    setIsAddDialogOpen(false)
  }

  const handleEditExercise = () => {
    if (!selectedExercise) return

    if (!name.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a name for the exercise",
        variant: "destructive",
      })
      return
    }

    editExercise(selectedExercise.id, name, category, difficulty)
    resetForm()
    setIsEditDialogOpen(false)
  }

  const handleDeleteExercise = (exerciseId: string) => {
    removeExercise(exerciseId)
  }

  const openEditDialog = (exercise: any) => {
    setSelectedExercise(exercise)
    setName(exercise.name)
    setCategory(exercise.category)
    setDifficulty(exercise.difficulty)
    setIsEditDialogOpen(true)
  }

  const filteredExercises = exercises?.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Exercises Library</h1>
          <p className="text-muted-foreground">Manage your exercises collection for practice.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Exercise
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Exercise</DialogTitle>
              <DialogDescription>Add a new exercise to your practice library</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Exercise name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Scales">Scales</option>
                  <option value="Chords">Chords</option>
                  <option value="Fingerstyle">Fingerstyle</option>
                  <option value="Rhythm">Rhythm</option>
                  <option value="Speed">Speed</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="difficulty">Difficulty (1-10)</Label>
                <Input
                  id="difficulty"
                  type="number"
                  min="1"
                  max="10"
                  value={difficulty}
                  onChange={(e) => setDifficulty(Number.parseInt(e.target.value))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddExercise}>Add Exercise</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search exercises by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {isLoading ? (
        <div>Loading exercises...</div>
      ) : filteredExercises && filteredExercises.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredExercises.map((exercise) => (
            <Card key={exercise.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{exercise.name}</CardTitle>
                    <CardDescription>{exercise.category}</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(exercise)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteExercise(exercise.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm">
                  <ListMusic className="h-4 w-4 text-muted-foreground" />
                  <span>Difficulty: {exercise.difficulty}/10</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <ListMusic className="h-8 w-8 text-muted-foreground" />
              <h3 className="font-medium">No exercises found</h3>
              <p className="text-sm text-muted-foreground">
                {searchTerm
                  ? "No exercises match your search criteria"
                  : "Add exercises to your library to get started"}
              </p>
              {!searchTerm && (
                <Button onClick={() => setIsAddDialogOpen(true)} className="mt-2">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Exercise
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Exercise</DialogTitle>
            <DialogDescription>Update exercise details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                placeholder="Exercise name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-category">Category</Label>
              <select
                id="edit-category"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Scales">Scales</option>
                <option value="Chords">Chords</option>
                <option value="Fingerstyle">Fingerstyle</option>
                <option value="Rhythm">Rhythm</option>
                <option value="Speed">Speed</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-difficulty">Difficulty (1-10)</Label>
              <Input
                id="edit-difficulty"
                type="number"
                min="1"
                max="10"
                value={difficulty}
                onChange={(e) => setDifficulty(Number.parseInt(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditExercise}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

