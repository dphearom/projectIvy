import PlaceholderImage from "@/components/PlaceholderImage";
import { PLACEHOLDERS } from "@/lib/placeholders";

const STORIES = [
  { name: "Nguyen Le Phuong Thuy", award: "Full Scholarship", school: "University of California San Diego" },
  { name: "Bui Tuan Kien", award: "Full Scholarship", school: "University of Richmond" },
  { name: "Ngo Tran Hieu Minh", award: "1.8B VND Scholarship", school: "University of Toronto" },
  { name: "Pham Thi Ngan Giang", award: "4.5B Scholarship", school: "University of Richmond" },
  { name: "Dang Dieu Linh", award: "3.9B VND Scholarship", school: "Macalester College" },
  { name: "Le Duc Khoa", award: "4.2B Scholarship", school: "Case Western Reserve University" },
  { name: "Nguyen Dieu Van", award: "Full Scholarship", school: "Hobart and William Smith" },
  { name: "Le Khanh Huy", award: "4.8B VND Scholarship", school: "Texas Christian University" },
  { name: "Tran Quynh Phuong", award: "Full Scholarship", school: "Temple University" },
];

interface Props {
  id?: string;
  eyebrow?: string;
  title?: string;
  altBackground?: boolean;
}

const SuccessStories = ({
  id = "success",
  eyebrow = "Featured list",
  title = "Face of success",
  altBackground = false,
}: Props) => (
  <section className={`success-stories${altBackground ? " success-stories--alt" : ""}`} id={id}>
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="eyebrow center">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <div className="success-grid">
        {STORIES.map((story, i) => (
          <article
            className="success-card"
            key={story.name}
            data-reveal
            data-reveal-d={String((i % 3) + 1)}
          >
            <div className="success-photo">
              <PlaceholderImage name={PLACEHOLDERS.SUCCESS_STORY_PORTRAIT} aspect="3 / 4" />
            </div>
            <div className="success-body">
              <h3>{story.name}</h3>
              <p className="success-award">{story.award}</p>
              <p className="success-school">{story.school}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
