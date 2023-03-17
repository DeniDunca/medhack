package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.service.ChildService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/child")
@RequiredArgsConstructor
public class ChildController {
    private final ChildService childService;

    @GetMapping("/all")
    public ResponseEntity<List<ChildDto>> getAllChildren() {
        return new ResponseEntity<>(childService.getAllChildren(), HttpStatus.OK);
    }

    @GetMapping("/{childId}")
    public ResponseEntity<ChildDto> getChild(@PathVariable Long childId) {
        return new ResponseEntity<>(childService.getChild(childId), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Long> addChild(@RequestBody ChildDto childDto) {
        return new ResponseEntity<>(childService.addChild(childDto), HttpStatus.OK);
    }

    @DeleteMapping("/{childId}")
    public ResponseEntity<String> deleteChild(@PathVariable Long childId) {
        childService.deleteChild(childId);
        return new ResponseEntity<>("Child deleted", HttpStatus.OK);
    }
    // controller
}
