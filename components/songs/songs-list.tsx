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
import { useSongs } from "@/hooks/use-songs"
import { Edit, Music2, Plus, Search, Trash } from "lucide-react"

export function SongsList() {
  const { songs, isLoading, addSong, editSong, removeSong } = useSongs()
  const { toast } = useToast()

  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedSong, setSelectedSong] = useState<any>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [difficulty, setDifficulty] = useState(5)

  const resetForm = () => {
    setTitle("")
    setArtist("")
    setDifficulty(5)
  }

  const handleAddSong = async () => {
    if (!title.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a title for the song",
        variant: "destructive",
      })
      return
    }
  
    try {
      await addSong(title, artist || null, difficulty)
      toast({
        title: "Success",
        description: "Song added successfully",
        variant: "success",
      })
      resetForm()
      setIsAddDialogOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add song",
        variant: "destructive",
      })
      console.error("Error adding song:", error)
    }
  }
  

  const handleEditSong = () => {
    if (!selectedSong) return

    if (!title.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a title for the song",
        variant: "destructive",
      })
      return
    }

    editSong(selectedSong.id, title, artist || null, difficulty)
    resetForm()
    setIsEditDialogOpen(false)
  }

  const handleDeleteSong = (songId: string) => {
    removeSong(songId)
  }

  const openEditDialog = (song: any) => {
    setSelectedSong(song)
    setTitle(song.title)
    setArtist(song.artist || "")
    setDifficulty(song.difficulty)
    setIsEditDialogOpen(true)
  }

  const filteredSongs = songs?.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (song.artist && song.artist.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Songs Library</h1>
          <p className="text-muted-foreground">Manage your songs collection for practice.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Song
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Song</DialogTitle>
              <DialogDescription>Add a new song to your practice library</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Song title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="artist">Artist</Label>
                <Input
                  id="artist"
                  placeholder="Artist name"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
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
              <Button onClick={handleAddSong}>Add Song</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search songs by title or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {isLoading ? (
        <div>Loading songs...</div>
      ) : filteredSongs && filteredSongs.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSongs.map((song) => (
            <Card key={song.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{song.title}</CardTitle>
                    <CardDescription>{song.artist || "Unknown Artist"}</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(song)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteSong(song.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm">
                  <Music2 className="h-4 w-4 text-muted-foreground" />
                  <span>Difficulty: {song.difficulty}/10</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <Music2 className="h-8 w-8 text-muted-foreground" />
              <h3 className="font-medium">No songs found</h3>
              <p className="text-sm text-muted-foreground">
                {searchTerm ? "No songs match your search criteria" : "Add songs to your library to get started"}
              </p>
              {!searchTerm && (
                <Button onClick={() => setIsAddDialogOpen(true)} className="mt-2">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Song
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Song</DialogTitle>
            <DialogDescription>Update song details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-title">Title</Label>
              <Input
                id="edit-title"
                placeholder="Song title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-artist">Artist</Label>
              <Input
                id="edit-artist"
                placeholder="Artist name"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
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
            <Button onClick={handleEditSong}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

