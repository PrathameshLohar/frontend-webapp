using Microsoft.AspNetCore.Mvc;
using note.API.Data;
using Microsoft.EntityFrameworkCore;
using note.API.Models;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace note.API.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
    public class NotesController : Controller
    {
        private readonly noteDBcontext _noteDBcontext;
        public NotesController(noteDBcontext noteDBcontext) 
        {
            _noteDBcontext = noteDBcontext;
        }

        [HttpGet]
        public async Task <IActionResult> GetNotes()
        {
            var notes= await _noteDBcontext.Notes.ToListAsync();
            return Ok(notes);
        }

        [HttpPost]
        public async Task<IActionResult> AddNote([FromBody] Note noteRequest)
        {
            noteRequest.Id = Guid.NewGuid();
            await _noteDBcontext.Notes.AddAsync(noteRequest);
            await _noteDBcontext.SaveChangesAsync();

            return Ok(noteRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetNote([FromRoute] Guid id)
        {
            var note= 
                await _noteDBcontext.Notes.FirstOrDefaultAsync(x=> x.Id==id);

            if (note==null)
            {
                return NotFound();
            }

            return Ok(note);
        }


        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateNote([FromRoute] Guid id, Note updateNoteRequest)
        {
            var note = await _noteDBcontext.Notes.FindAsync(id);

            if(note==null) 
            {
            return NotFound();
            }
            note.Id = updateNoteRequest.Id;
            note.Name = updateNoteRequest.Name;
            note.Description = updateNoteRequest.Description;

            await _noteDBcontext.SaveChangesAsync();
            return Ok(note);
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteNote([FromRoute]Guid id)
        {
            var note = await _noteDBcontext.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }
            _noteDBcontext.Notes.Remove(note);
            await _noteDBcontext.SaveChangesAsync(); 
            return Ok(note);
        }
    }
}
